import type { AwsIdentityProperties } from "@aws-sdk/types";
import { describe, expect, it, vi } from "vitest";

import { createLazyCredentialProvider } from "./createLazyCredentialProvider";

describe("createLazyCredentialProvider", () => {
  it("creates the provider once and forwards every call", async () => {
    const inner = vi.fn(async (options?: AwsIdentityProperties) => ({
      accessKeyId: "AKID",
      secretAccessKey: "SECRET",
      options,
    }));
    const factory = vi.fn(async () => inner);
    const provider = createLazyCredentialProvider(factory);
    const options = { callerClientConfig: { region: async () => "us-west-2" } };

    await provider(options);
    await provider(options);

    expect(factory).toHaveBeenCalledTimes(1);
    expect(inner).toHaveBeenCalledTimes(2);
    expect(inner).toHaveBeenNthCalledWith(1, options);
    expect(provider.memoized).toBe(true);
  });

  it("shares initialization between concurrent callers", async () => {
    const inner = vi.fn(async () => ({ accessKeyId: "AKID", secretAccessKey: "SECRET" }));
    let release!: (provider: typeof inner) => void;
    const factory = vi.fn(() => new Promise<typeof inner>((resolve) => (release = resolve)));
    const provider = createLazyCredentialProvider(factory);

    const callers = [provider(), provider(), provider()];
    release(inner);
    await Promise.all(callers);

    expect(factory).toHaveBeenCalledTimes(1);
    expect(inner).toHaveBeenCalledTimes(3);
  });

  it("retries initialization after the factory fails", async () => {
    const inner = async () => ({ accessKeyId: "AKID", secretAccessKey: "SECRET" });
    const factory = vi.fn().mockRejectedValueOnce(new Error("load failed")).mockResolvedValueOnce(inner);
    const provider = createLazyCredentialProvider(factory);

    await expect(provider()).rejects.toThrow("load failed");
    await expect(provider()).resolves.toMatchObject({ accessKeyId: "AKID" });
    expect(factory).toHaveBeenCalledTimes(2);
  });

  it("does not let a late waiter on a failed attempt clear a newer retry", async () => {
    const inner = async () => ({ accessKeyId: "AKID", secretAccessKey: "SECRET" });
    let rejectFirst!: (error: Error) => void;
    const first = new Promise<typeof inner>((_, reject) => (rejectFirst = reject));
    let releaseRetry!: (provider: typeof inner) => void;
    const retry = new Promise<typeof inner>((resolve) => (releaseRetry = resolve));
    const factory = vi.fn().mockReturnValueOnce(first).mockReturnValueOnce(retry).mockResolvedValue(inner);
    const provider = createLazyCredentialProvider(factory);

    // Reactions on `first` run in registration order: waiter A, then the retry starter, then waiter B.
    const waiterA = provider();
    let retryCaller: Promise<unknown> | undefined;
    first.catch(() => {
      retryCaller = provider();
    });
    const waiterB = provider();

    rejectFirst(new Error("load failed"));
    await expect(waiterA).rejects.toThrow("load failed");
    await expect(waiterB).rejects.toThrow("load failed");

    // This caller must join the in-flight retry instead of starting a third factory call.
    const joiner = provider();
    releaseRetry(inner);
    await Promise.all([retryCaller, joiner]);

    expect(factory).toHaveBeenCalledTimes(2);
  });

  it("exposes invalidate only after the inner provider exists", async () => {
    const invalidate = vi.fn();
    const inner = Object.assign(async () => ({ accessKeyId: "AKID", secretAccessKey: "SECRET" }), { invalidate });
    const provider = createLazyCredentialProvider(async () => inner);

    expect(provider.invalidate).toBeUndefined();
    await provider();
    provider.invalidate?.({ accessKeyId: "AKID" });

    expect(invalidate).toHaveBeenCalledWith({ accessKeyId: "AKID" });
  });

  it("does not invent invalidation for a provider outside the spec", async () => {
    const inner = async () => ({ accessKeyId: "PROCESS", secretAccessKey: "SECRET" });
    const provider = createLazyCredentialProvider(async () => inner);

    await provider();

    expect(provider.invalidate).toBeUndefined();
  });
});
