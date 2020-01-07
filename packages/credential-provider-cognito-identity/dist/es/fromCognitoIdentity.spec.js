import { __awaiter, __generator } from "tslib";
import { fromCognitoIdentity } from "./fromCognitoIdentity";
import { ProviderError } from "@aws-sdk/property-provider";
import { GetCredentialsForIdentityCommand } from "@aws-sdk/client-cognito-identity";
describe("fromCognitoIdentity", function () {
    var identityId = "id";
    var expiration = new Date();
    var send = jest.fn().mockResolvedValue({
        Credentials: {
            AccessKeyId: "foo",
            SecretKey: "bar",
            SessionToken: "baz",
            Expiration: expiration
        },
        IdentityId: identityId
    });
    var mockClient = { send: send };
    beforeEach(function () {
        send.mockClear();
    });
    it("should execute a GetCredentialsForIdentity command and convert the result", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, fromCognitoIdentity({
                            client: mockClient,
                            identityId: identityId,
                            customRoleArn: "myArn"
                        })()];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toEqual({
                        accessKeyId: "foo",
                        secretAccessKey: "bar",
                        sessionToken: "baz",
                        expiration: expiration
                    });
                    expect(send.mock.calls[0][0]).toEqual(new GetCredentialsForIdentityCommand({
                        IdentityId: identityId,
                        CustomRoleArn: "myArn"
                    }));
                    return [2 /*return*/];
            }
        });
    }); });
    it("should resolve logins to string tokens and pass them to the service", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fromCognitoIdentity({
                        client: mockClient,
                        identityId: identityId,
                        customRoleArn: "myArn",
                        logins: {
                            myDomain: "token",
                            "www.amazon.com": function () { return Promise.resolve("expiring nonce"); }
                        }
                    })()];
                case 1:
                    _a.sent();
                    expect(send.mock.calls[0][0]).toEqual(new GetCredentialsForIdentityCommand({
                        IdentityId: identityId,
                        CustomRoleArn: "myArn",
                        Logins: {
                            myDomain: "token",
                            "www.amazon.com": "expiring nonce"
                        }
                    }));
                    return [2 /*return*/];
            }
        });
    }); });
    it("should convert a GetCredentialsForIdentity response without credentials to a provider error", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    send.mockImplementationOnce(function () { return Promise.resolve({ identityId: identityId }); });
                    return [4 /*yield*/, expect(fromCognitoIdentity({
                            client: mockClient,
                            identityId: identityId,
                            customRoleArn: "myArn"
                        })()).rejects.toMatchObject(new ProviderError("Response from Amazon Cognito contained no credentials"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should convert a GetCredentialsForIdentity response without an access key ID to a provider error", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    send.mockImplementationOnce(function () {
                        return Promise.resolve({
                            Credentials: { SecretKey: "bar" },
                            IdentityId: identityId
                        });
                    });
                    return [4 /*yield*/, expect(fromCognitoIdentity({
                            client: mockClient,
                            identityId: identityId,
                            customRoleArn: "myArn"
                        })()).rejects.toMatchObject(new ProviderError("Response from Amazon Cognito contained no access key ID"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should convert a GetCredentialsForIdentity response without a secret key to a provider error", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    send.mockImplementationOnce(function () {
                        return Promise.resolve({
                            Credentials: { AccessKeyId: "foo" },
                            IdentityId: identityId
                        });
                    });
                    return [4 /*yield*/, expect(fromCognitoIdentity({
                            client: mockClient,
                            identityId: identityId,
                            customRoleArn: "myArn"
                        })()).rejects.toMatchObject(new ProviderError("Response from Amazon Cognito contained no secret key"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=fromCognitoIdentity.spec.js.map