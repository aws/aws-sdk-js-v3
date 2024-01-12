import { fromCognitoIdentityPool as coreProvider } from "@aws-sdk/credential-provider-cognito-identity";

import { fromCognitoIdentityPool } from "./fromCognitoIdentityPool";

jest.mock("@aws-sdk/client-cognito-identity", () => ({
  CognitoIdentityClient: jest.fn().mockImplementation(function () {
    return "COGNITO_IDENTITY_CLIENT";
  }),
}));

jest.mock("@aws-sdk/credential-provider-cognito-identity", () => ({
  fromCognitoIdentityPool: jest.fn(),
}));

describe("fromCognitoIdentityPool", () => {
  const identityPoolId = "IDENTITY_POOL_ID";

  beforeEach(() => {
    jest.clearAllMocks();
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
