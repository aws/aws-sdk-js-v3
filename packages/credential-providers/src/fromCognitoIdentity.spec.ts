import { fromCognitoIdentity as coreProvider } from "@aws-sdk/credential-provider-cognito-identity";

import { fromCognitoIdentity } from "./fromCognitoIdentity";

jest.mock("@aws-sdk/client-cognito-identity", () => ({
  CognitoIdentityClient: jest.fn().mockImplementation(function () {
    return "COGNITO_IDENTITY_CLIENT";
  }),
}));

jest.mock("@aws-sdk/credential-provider-cognito-identity", () => ({
  fromCognitoIdentity: jest.fn(),
}));

describe("fromCognitoIdentity", () => {
  const identityId = "IDENTITY_ID";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("defers to @aws-sdk/credential-provider-cognito-identity", () => {
    fromCognitoIdentity({
      identityId,
    });
    expect(coreProvider).toHaveBeenCalledWith({
      identityId,
    });
  });
});
