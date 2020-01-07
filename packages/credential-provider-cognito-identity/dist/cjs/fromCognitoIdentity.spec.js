"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fromCognitoIdentity_1 = require("./fromCognitoIdentity");
const property_provider_1 = require("@aws-sdk/property-provider");
const client_cognito_identity_1 = require("@aws-sdk/client-cognito-identity");
describe("fromCognitoIdentity", () => {
    const identityId = "id";
    const expiration = new Date();
    const send = jest.fn().mockResolvedValue({
        Credentials: {
            AccessKeyId: "foo",
            SecretKey: "bar",
            SessionToken: "baz",
            Expiration: expiration
        },
        IdentityId: identityId
    });
    const mockClient = { send };
    beforeEach(() => {
        send.mockClear();
    });
    it("should execute a GetCredentialsForIdentity command and convert the result", async () => {
        expect(await fromCognitoIdentity_1.fromCognitoIdentity({
            client: mockClient,
            identityId,
            customRoleArn: "myArn"
        })()).toEqual({
            accessKeyId: "foo",
            secretAccessKey: "bar",
            sessionToken: "baz",
            expiration
        });
        expect(send.mock.calls[0][0]).toEqual(new client_cognito_identity_1.GetCredentialsForIdentityCommand({
            IdentityId: identityId,
            CustomRoleArn: "myArn"
        }));
    });
    it("should resolve logins to string tokens and pass them to the service", async () => {
        await fromCognitoIdentity_1.fromCognitoIdentity({
            client: mockClient,
            identityId,
            customRoleArn: "myArn",
            logins: {
                myDomain: "token",
                "www.amazon.com": () => Promise.resolve("expiring nonce")
            }
        })();
        expect(send.mock.calls[0][0]).toEqual(new client_cognito_identity_1.GetCredentialsForIdentityCommand({
            IdentityId: identityId,
            CustomRoleArn: "myArn",
            Logins: {
                myDomain: "token",
                "www.amazon.com": "expiring nonce"
            }
        }));
    });
    it("should convert a GetCredentialsForIdentity response without credentials to a provider error", async () => {
        send.mockImplementationOnce(() => Promise.resolve({ identityId }));
        await expect(fromCognitoIdentity_1.fromCognitoIdentity({
            client: mockClient,
            identityId,
            customRoleArn: "myArn"
        })()).rejects.toMatchObject(new property_provider_1.ProviderError("Response from Amazon Cognito contained no credentials"));
    });
    it("should convert a GetCredentialsForIdentity response without an access key ID to a provider error", async () => {
        send.mockImplementationOnce(() => Promise.resolve({
            Credentials: { SecretKey: "bar" },
            IdentityId: identityId
        }));
        await expect(fromCognitoIdentity_1.fromCognitoIdentity({
            client: mockClient,
            identityId,
            customRoleArn: "myArn"
        })()).rejects.toMatchObject(new property_provider_1.ProviderError("Response from Amazon Cognito contained no access key ID"));
    });
    it("should convert a GetCredentialsForIdentity response without a secret key to a provider error", async () => {
        send.mockImplementationOnce(() => Promise.resolve({
            Credentials: { AccessKeyId: "foo" },
            IdentityId: identityId
        }));
        await expect(fromCognitoIdentity_1.fromCognitoIdentity({
            client: mockClient,
            identityId,
            customRoleArn: "myArn"
        })()).rejects.toMatchObject(new property_provider_1.ProviderError("Response from Amazon Cognito contained no secret key"));
    });
});
//# sourceMappingURL=fromCognitoIdentity.spec.js.map