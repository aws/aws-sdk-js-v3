import { CredentialsProviderError } from "@smithy/core/config";
import { describe, expect, test as it } from "vitest";

import type { CredentialDaemonErrorCode } from "./CredentialDaemonProviderError";
import { CredentialDaemonProviderError } from "./CredentialDaemonProviderError";

describe(CredentialDaemonProviderError.name, () => {
  const codes: CredentialDaemonErrorCode[] = [
    "NOT_RUNNING",
    "REQUEST_REJECTED",
    "PROTOCOL_ERROR",
    "REAUTH_REQUIRED",
    "CREDENTIAL_NOT_FOUND",
    "UNSUPPORTED_MATERIAL",
    "INVALID_CONFIG",
    "UNSUPPORTED_PLATFORM",
  ];

  it.each(codes)("code %s stops the chain", (code) => {
    const error = new CredentialDaemonProviderError("message", code);
    expect(error).toBeInstanceOf(CredentialDaemonProviderError);
    expect(error).toBeInstanceOf(CredentialsProviderError);
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe("CredentialDaemonProviderError");
    expect(error.message).toBe("message");
    expect(error.code).toBe(code);
    expect(error.tryNextLink).toBe(false);
  });
});
