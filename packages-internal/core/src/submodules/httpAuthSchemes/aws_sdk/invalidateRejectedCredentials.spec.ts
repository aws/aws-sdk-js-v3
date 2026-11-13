import { ServiceException } from "@smithy/core/client";
import { describe, expect, it, vi } from "vitest";

import { getSigningAccessKeyId, invalidateRejectedCredentials, isModeledError } from "./invalidateRejectedCredentials";

class ExampleServiceException extends ServiceException {
  public static readonly shapeId: string = "smithy.ts.sdk.synthetic.com.amazonaws.example#ExampleServiceException";
}
class ModeledExpiredTokenException extends ExampleServiceException {
  public static readonly shapeId: string = "com.amazonaws.example#ExpiredTokenException";
}

const meta = { $fault: "client" as const, $metadata: {} };
const unmodeled = (name: string) => new ExampleServiceException({ name, ...meta });
const modeled = () => new ModeledExpiredTokenException({ name: "ExpiredTokenException", ...meta });

describe("getSigningAccessKeyId", () => {
  it.each([
    [
      "SigV4",
      "AWS4-HMAC-SHA256 Credential=AKID1/20260101/us-east-1/s3/aws4_request, SignedHeaders=host, Signature=abc",
    ],
    ["SigV4a", "AWS4-ECDSA-P256-SHA256 Credential=AKID1/20260101/s3/aws4_request, SignedHeaders=host, Signature=abc"],
  ])("reads the access key ID from a %s authorization header", (_label, authorization) => {
    expect(getSigningAccessKeyId({ headers: { authorization } } as any)).toBe("AKID1");
  });

  it("returns undefined when the request is not signed", () => {
    expect(getSigningAccessKeyId({ headers: {} } as any)).toBeUndefined();
  });
});

describe("isModeledError", () => {
  it("treats an instance of a generated error class as modeled", () => {
    expect(isModeledError(modeled())).toBe(true);
  });

  it.each([
    ["the service base exception", unmodeled("ExpiredToken")],
    ["ServiceException", new ServiceException({ name: "ExpiredToken", ...meta })],
    ["a plain Error", Object.assign(new Error("expired"), { name: "ExpiredToken" })],
    ["undefined", undefined],
  ])("treats %s as unmodeled", (_label, error) => {
    expect(isModeledError(error)).toBe(false);
  });
});

describe("invalidateRejectedCredentials", () => {
  const provider = () => Object.assign(vi.fn(), { invalidate: vi.fn() });

  it.each(["ExpiredToken", "ExpiredTokenException"])(
    "invalidates the signing credentials and makes an unmodeled %s retryable",
    (name) => {
      const credentials = provider();
      const error = unmodeled(name);

      invalidateRejectedCredentials(error, credentials, "AKID1");

      expect(credentials.invalidate).toHaveBeenCalledWith({ accessKeyId: "AKID1" });
      expect(error.$retryable).toEqual({});
    }
  );

  it("does nothing for a modeled error, because refreshing credentials cannot fix it", () => {
    const credentials = provider();
    const error = modeled();

    invalidateRejectedCredentials(error, credentials, "AKID1");

    expect(credentials.invalidate).not.toHaveBeenCalled();
    expect(error.$retryable).toBeUndefined();
  });

  it.each(["AccessDenied", "AccessDeniedException", "InvalidClientTokenId"])("does nothing for %s", (name) => {
    const credentials = provider();
    const error = unmodeled(name);

    invalidateRejectedCredentials(error, credentials, "AKID1");

    expect(credentials.invalidate).not.toHaveBeenCalled();
    expect(error.$retryable).toBeUndefined();
  });

  it("does not retry when the provider cannot invalidate, so it never resends the rejected credentials", () => {
    const error = unmodeled("ExpiredToken");

    invalidateRejectedCredentials(error, vi.fn(), "AKID1");

    expect(error.$retryable).toBeUndefined();
  });

  it("does nothing when the signing access key is unknown", () => {
    const credentials = provider();
    const error = unmodeled("ExpiredToken");

    invalidateRejectedCredentials(error, credentials, undefined);

    expect(credentials.invalidate).not.toHaveBeenCalled();
    expect(error.$retryable).toBeUndefined();
  });

  it("keeps a retryable trait the error already has", () => {
    const error = unmodeled("ExpiredToken");
    error.$retryable = { throttling: true };

    invalidateRejectedCredentials(error, provider(), "AKID1");

    expect(error.$retryable).toEqual({ throttling: true });
  });
});
