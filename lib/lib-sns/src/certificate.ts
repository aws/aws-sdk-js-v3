import https from "node:https";

import { SNSValidationError } from "./errors";

/**
 * Fetches a PEM certificate over HTTPS. Injectable so the signing path can be
 * tested without a live endpoint.
 * @internal
 */
export type CertificateFetcher = (certUrl: string) => Promise<string>;

/**
 * Caching certificate fetcher. SNS reuses a signing cert across many messages.
 * @internal
 */
export class CertificateCache {
  private readonly _cache = new Map<string, string>();
  private readonly _fetch: CertificateFetcher;

  public constructor(fetcher: CertificateFetcher = fetchCertificate) {
    this._fetch = fetcher;
  }

  public async get(certUrl: string): Promise<string> {
    const cached = this._cache.get(certUrl);
    if (cached !== undefined) {
      return cached;
    }
    const certificate = await this._fetch(certUrl);
    this._cache.set(certUrl, certificate);
    return certificate;
  }
}

/**
 * Default fetcher over `node:https`, compatible with global HTTPS agent CA
 * config (NODE_EXTRA_CA_CERTS, https.globalAgent.options.ca).
 * @internal
 */
export function fetchCertificate(certUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(certUrl, (res) => {
        if (res.statusCode !== 200) {
          res.resume();
          reject(new SNSValidationError("Certificate could not be retrieved"));
          return;
        }
        const chunks: string[] = [];
        res.setEncoding("utf8");
        res.on("data", (chunk: string) => chunks.push(chunk));
        res.on("end", () => resolve(chunks.join("")));
        res.on("error", (e) => reject(new SNSValidationError("Certificate could not be retrieved", { cause: e })));
      })
      .on("error", (e) => reject(new SNSValidationError("Certificate could not be retrieved", { cause: e })));
  });
}
