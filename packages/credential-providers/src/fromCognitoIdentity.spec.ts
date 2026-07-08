import { fromCognitoIdentity as coreProvider } from "@aws-sdk/credential-provider-cognito-identity";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromCognitoIdentity } from "./fromCognitoIdentity";

vi.mock("@aws-sdk/client-cognito-identity", () => ({
  CognitoIdentityClient: vi.fn().mockImplementation(function () {
    return "COGNITO_IDENTITY_CLIENT";
  }),
}));

vi.mock("@aws-sdk/credential-provider-cognito-identity", () => ({
  fromCognitoIdentity: vi.fn().mockReturnValue(vi.fn()),
}));

describe("fromCognitoIdentity", () => {
  const identityId = "IDENTITY_ID";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("defers to @aws-sdk/credential-provider-cognito-identity", async () => {
    const provider = fromCognitoIdentity({
      identityId,
    });
    await provider({});
    expect(coreProvider).toHaveBeenCalledWith({
      identityId,
    });
  });
});
