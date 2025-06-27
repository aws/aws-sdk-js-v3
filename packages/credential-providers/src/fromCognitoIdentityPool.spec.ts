import { fromCognitoIdentityPool as coreProvider } from "@aws-sdk/credential-provider-cognito-identity";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromCognitoIdentityPool } from "./fromCognitoIdentityPool";

vi.mock("@aws-sdk/client-cognito-identity", () => ({
  CognitoIdentityClient: vi.fn().mockImplementation(function () {
    return "COGNITO_IDENTITY_CLIENT";
  }),
}));

vi.mock("@aws-sdk/credential-provider-cognito-identity", () => ({
  fromCognitoIdentityPool: vi.fn(),
}));

describe("fromCognitoIdentityPool", () => {
  const identityPoolId = "IDENTITY_POOL_ID";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("defers to @aws-sdk/credential-provider-cognito-identity", () => {
    fromCognitoIdentityPool({
      identityPoolId,
    });
    expect(coreProvider).toHaveBeenCalledWith({
      identityPoolId,
    });
  });
});
