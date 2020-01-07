import { __awaiter, __generator } from "tslib";
import { fromCognitoIdentityPool } from "./fromCognitoIdentityPool";
import { ProviderError } from "@aws-sdk/property-provider";
import { GetIdCommand } from "@aws-sdk/client-cognito-identity";
jest.mock("./fromCognitoIdentity", function () {
    var promiseFunc = jest.fn().mockResolvedValue({
        accessKeyId: "foo",
        secretAccessKey: "bar",
        sessionToken: "baz"
    });
    return { fromCognitoIdentity: jest.fn().mockReturnValue(promiseFunc) };
});
import { fromCognitoIdentity } from "./fromCognitoIdentity";
jest.mock("./localStorage", function () {
    return {
        localStorage: function () {
            return {
                getItem: jest.fn(),
                setItem: jest.fn(),
                removeItem: jest.fn()
            };
        }
    };
});
import { localStorage } from "./localStorage";
import { InMemoryStorage } from "./InMemoryStorage";
describe("fromCognitoIdentityPool", function () {
    var identityPoolId = "poolId";
    var identityId = "id";
    var send = jest.fn().mockResolvedValue({ IdentityId: identityId });
    var mockClient = { send: send };
    beforeEach(function () {
        send.mockClear();
        fromCognitoIdentity({}).mockClear();
        fromCognitoIdentity.mockClear();
        localStorage().getItem.mockClear();
        localStorage().setItem.mockClear();
        localStorage().removeItem.mockClear();
    });
    it("should execute a GetId command and then invoke fromCognitoIdentity with the result", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, fromCognitoIdentityPool({
                            client: mockClient,
                            identityPoolId: identityPoolId,
                            customRoleArn: "myArn"
                        })()];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toEqual({
                        accessKeyId: "foo",
                        secretAccessKey: "bar",
                        sessionToken: "baz"
                    });
                    expect(send.mock.calls.length).toBe(1);
                    expect(send.mock.calls[0][0]).toEqual(new GetIdCommand({ IdentityPoolId: identityPoolId }));
                    expect(fromCognitoIdentity.mock.calls.length).toBe(1);
                    expect(fromCognitoIdentity.mock.calls[0][0]).toEqual({
                        client: mockClient,
                        customRoleArn: "myArn",
                        identityId: identityId
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it("should resolve logins to string tokens and pass them to the service", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fromCognitoIdentityPool({
                        client: mockClient,
                        identityPoolId: identityPoolId,
                        logins: {
                            myDomain: "token",
                            "www.amazon.com": function () { return Promise.resolve("expiring nonce"); }
                        }
                    })()];
                case 1:
                    _a.sent();
                    expect(send.mock.calls[0][0]).toEqual(new GetIdCommand({
                        IdentityPoolId: identityPoolId,
                        Logins: {
                            myDomain: "token",
                            "www.amazon.com": "expiring nonce"
                        }
                    }));
                    return [2 /*return*/];
            }
        });
    }); });
    it("should not invoke GetId a second time once an identityID has been fetched", function () { return __awaiter(void 0, void 0, void 0, function () {
        var provider, i, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    provider = fromCognitoIdentityPool({
                        client: mockClient,
                        identityPoolId: identityPoolId,
                        customRoleArn: "myArn"
                    });
                    return [4 /*yield*/, provider()];
                case 1:
                    _b.sent();
                    // One GetId command should have been executed, followed by an
                    // invocation of fromCognitoIdentity
                    expect(send.mock.calls.length).toBe(1);
                    expect(fromCognitoIdentity.mock.calls.length).toBe(1);
                    expect(fromCognitoIdentity({}).mock.calls.length).toBe(1);
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < 10)) return [3 /*break*/, 5];
                    _a = expect;
                    return [4 /*yield*/, provider()];
                case 3:
                    _a.apply(void 0, [_b.sent()]).toEqual({
                        accessKeyId: "foo",
                        secretAccessKey: "bar",
                        sessionToken: "baz"
                    });
                    _b.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    // GetId should not have been called again, but each call of the
                    // provider should invoke fromCognitoIdentity
                    expect(send.mock.calls.length).toBe(1);
                    expect(fromCognitoIdentity({}).mock.calls.length).toBe(11);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should convert a GetId response without an ID to a provider error", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    send.mockImplementationOnce(function () { return Promise.resolve({}); });
                    return [4 /*yield*/, expect(fromCognitoIdentityPool({
                            accountId: "myAccountId",
                            client: mockClient,
                            identityPoolId: identityPoolId
                        })()).rejects.toMatchObject(new ProviderError("Response from Amazon Cognito contained no identity ID"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should allow injecting a custom cache", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cache;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cache = new InMemoryStorage();
                    return [4 /*yield*/, fromCognitoIdentityPool({
                            client: mockClient,
                            identityPoolId: identityPoolId,
                            cache: cache
                        })()];
                case 1:
                    _a.sent();
                    expect(cache.getItem("aws:cognito-identity-credentials:" + identityPoolId + ":ANONYMOUS")).toBe(identityId);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should not call `GetId` if the IdentityId is in cache", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cache;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cache = new InMemoryStorage((_a = {},
                        _a["aws:cognito-identity-credentials:" + identityPoolId + ":ANONYMOUS"] = identityId,
                        _a));
                    return [4 /*yield*/, fromCognitoIdentityPool({
                            client: mockClient,
                            identityPoolId: identityPoolId,
                            cache: cache
                        })()];
                case 1:
                    _b.sent();
                    expect(send.mock.calls.length).toBe(0);
                    expect(fromCognitoIdentity.mock.calls.length).toBe(1);
                    expect(fromCognitoIdentity.mock.calls[0][0]).toEqual({
                        client: mockClient,
                        identityId: identityId
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it("should remove the entry from cache if an error is encountered", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cacheKey, cache;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cacheKey = "aws:cognito-identity-credentials:" + identityPoolId + ":ANONYMOUS";
                    cache = new InMemoryStorage((_a = {},
                        _a[cacheKey] = identityId,
                        _a));
                    fromCognitoIdentity({}).mockImplementationOnce(function () {
                        return Promise.reject(new Error("PANIC"));
                    });
                    return [4 /*yield*/, expect(fromCognitoIdentityPool({
                            client: mockClient,
                            identityPoolId: identityPoolId,
                            cache: cache
                        })()).rejects.toMatchObject(new Error("PANIC"))];
                case 1:
                    _b.sent();
                    expect(cache.getItem(cacheKey)).toBe(null);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should not consult the cache if logins are provided without a separate identifier", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fromCognitoIdentityPool({
                        client: mockClient,
                        identityPoolId: identityPoolId,
                        logins: {
                            "www.amazon.com": "token"
                        }
                    })()];
                case 1:
                    _a.sent();
                    expect(localStorage().getItem.mock.calls.length).toBe(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should not attempt to remove the entry from cache when an error is encountered if logins are provided without a separate identifier", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fromCognitoIdentity({}).mockImplementationOnce(function () {
                        return Promise.reject(new Error("PANIC"));
                    });
                    return [4 /*yield*/, expect(fromCognitoIdentityPool({
                            client: mockClient,
                            identityPoolId: identityPoolId,
                            logins: {
                                "www.amazon.com": "token"
                            }
                        })()).rejects.toMatchObject(new Error("PANIC"))];
                case 1:
                    _a.sent();
                    expect(localStorage().removeItem.mock.calls.length).toBe(0);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=fromCognitoIdentityPool.spec.js.map