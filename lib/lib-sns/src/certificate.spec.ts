import { EventEmitter } from "node:events";
import https from "node:https";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CertificateCache, fetchCertificate } from "./certificate";

const certUrl = "https://sns.us-east-1.amazonaws.com/cert.pem";

describe(CertificateCache.name, () => {
  it("shares one cache entry across URL fragments", async () => {
    const fetcher = vi.fn(() => Promise.resolve("PEM"));
    const cache = new CertificateCache(fetcher, 1_000);

    await cache.get(`${certUrl}#a`);
    await cache.get(`${certUrl}#b`);
    await cache.get(certUrl);

    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(fetcher).toHaveBeenCalledWith(certUrl, 1_000);
  });
});

describe(fetchCertificate.name, () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("rejects when the request exceeds the deadline", async () => {
    vi.useFakeTimers();
    const req = Object.assign(new EventEmitter(), {
      destroy: vi.fn((err: Error) => req.emit("error", err)),
    });
    vi.spyOn(https, "get").mockReturnValue(req as never);

    const result = fetchCertificate(certUrl, 10_000);
    const assertion = expect(result).rejects.toThrow("Certificate could not be retrieved");

    await vi.advanceTimersByTimeAsync(9_999);
    expect(req.destroy).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(1);
    expect(req.destroy).toHaveBeenCalledTimes(1);
    await assertion;
  });
});
