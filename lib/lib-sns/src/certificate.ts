import https from "node:https";

import { DEFAULT_CERTIFICATE_TIMEOUT_MS } from "./constants";
import { SNSValidationError } from "./errors";

/**
 * Fetches a PEM certificate over HTTPS. Injectable so the signing path can be
 * tested without a live endpoint.
 * @internal
 */
export type CertificateFetcher = (certUrl: string, timeoutMs: number) => Promise<string>;

/**
 * Caching certificate fetcher. SNS reuses a signing cert across many messages.
 * @internal
 */
export class CertificateCache {
  private readonly _cache = new Map<string, string>();
  private readonly _fetch: CertificateFetcher;
  private readonly _timeoutMs: number;

  public constructor(
    fetcher: CertificateFetcher = fetchCertificate,
    timeoutMs: number = DEFAULT_CERTIFICATE_TIMEOUT_MS
  ) {
    this._fetch = fetcher;
    this._timeoutMs = timeoutMs;
  }

  public async get(certUrl: string): Promise<string> {
    const url = new URL(certUrl);
    url.hash = "";
    const key = url.href;

    const cached = this._cache.get(key);
    if (cached !== undefined) {
      return cached;
    }
    const certificate = await this._fetch(key, this._timeoutMs);
    this._cache.set(key, certificate);
    return certificate;
  }
}

/**
 * Default fetcher over `node:https`, compatible with global HTTPS agent CA
 * config (NODE_EXTRA_CA_CERTS, https.globalAgent.options.ca).
 * @internal
 */
export function fetchCertificate(certUrl: string, timeoutMs: number): Promise<string> {
  return new Promise((resolve, reject) => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const fail = (cause?: unknown) => {
      clearTimeout(timer);
      reject(new SNSValidationError("Certificate could not be retrieved", cause === undefined ? undefined : { cause }));
    };

    const req = https
      .get(certUrl, (res) => {
        if (res.statusCode !== 200) {
          res.resume();
          fail();
          return;
        }
        const chunks: string[] = [];
        res.setEncoding("utf8");
        res.on("data", (chunk: string) => chunks.push(chunk));
        res.on("end", () => {
          clearTimeout(timer);
          resolve(chunks.join(""));
        });
        res.on("error", fail);
      })
      .on("error", fail);

    timer = setTimeout(() => {
      req.destroy(new Error(`Certificate request exceeded ${timeoutMs}ms`));
    }, timeoutMs);
  });
}
