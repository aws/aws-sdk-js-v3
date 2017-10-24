"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var credential_provider_base_1 = require("@aws/credential-provider-base");
jest.mock('@aws/credential-provider-env', function () {
    var envProvider = jest.fn();
    return {
        fromEnv: jest.fn(function () { return envProvider; }),
    };
});
var credential_provider_env_1 = require("@aws/credential-provider-env");
jest.mock('@aws/credential-provider-ini', function () {
    var iniProvider = jest.fn();
    return {
        fromIni: jest.fn(function () { return iniProvider; }),
    };
});
var credential_provider_ini_1 = require("@aws/credential-provider-ini");
jest.mock('@aws/credential-provider-imds', function () {
    var containerMdsProvider = jest.fn();
    var instanceMdsProvider = jest.fn();
    return {
        fromContainerMetadata: jest.fn(function () { return containerMdsProvider; }),
        fromInstanceMetadata: jest.fn(function () { return instanceMdsProvider; }),
    };
});
var credential_provider_imds_1 = require("@aws/credential-provider-imds");
var fullUri = process.env[credential_provider_imds_1.ENV_CMDS_FULL_URI];
var relativeUri = process.env[credential_provider_imds_1.ENV_CMDS_RELATIVE_URI];
beforeEach(function () {
    delete process.env[credential_provider_imds_1.ENV_CMDS_FULL_URI];
    delete process.env[credential_provider_imds_1.ENV_CMDS_RELATIVE_URI];
    credential_provider_env_1.fromEnv().mockClear();
    credential_provider_ini_1.fromIni().mockClear();
    credential_provider_imds_1.fromContainerMetadata().mockClear();
    credential_provider_imds_1.fromInstanceMetadata().mockClear();
    credential_provider_env_1.fromEnv.mockClear();
    credential_provider_ini_1.fromIni.mockClear();
    credential_provider_imds_1.fromContainerMetadata.mockClear();
    credential_provider_imds_1.fromInstanceMetadata.mockClear();
});
afterAll(function () {
    process.env[credential_provider_imds_1.ENV_CMDS_FULL_URI] = fullUri;
    process.env[credential_provider_imds_1.ENV_CMDS_RELATIVE_URI] = relativeUri;
});
describe('defaultProvider', function () {
    it('should stop after the environmental provider if credentials have been found', function () { return __awaiter(_this, void 0, void 0, function () {
        var creds, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    creds = {
                        accessKeyId: 'foo',
                        secretAccessKey: 'bar',
                    };
                    credential_provider_env_1.fromEnv().mockImplementation(function () { return Promise.resolve(creds); });
                    _a = expect;
                    return [4 /*yield*/, _1.defaultProvider()()];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toEqual(creds);
                    expect(credential_provider_env_1.fromEnv().mock.calls.length).toBe(1);
                    expect(credential_provider_ini_1.fromIni().mock.calls.length).toBe(0);
                    expect(credential_provider_imds_1.fromContainerMetadata().mock.calls.length).toBe(0);
                    expect(credential_provider_imds_1.fromInstanceMetadata().mock.calls.length).toBe(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should stop after the ini provider if credentials have been found', function () { return __awaiter(_this, void 0, void 0, function () {
        var creds, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    creds = {
                        accessKeyId: 'foo',
                        secretAccessKey: 'bar',
                    };
                    credential_provider_env_1.fromEnv().mockImplementation(function () { return Promise.reject(new credential_provider_base_1.CredentialError('Nothing here!')); });
                    credential_provider_ini_1.fromIni().mockImplementation(function () { return Promise.resolve(creds); });
                    _a = expect;
                    return [4 /*yield*/, _1.defaultProvider()()];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toEqual(creds);
                    expect(credential_provider_env_1.fromEnv().mock.calls.length).toBe(1);
                    expect(credential_provider_ini_1.fromIni().mock.calls.length).toBe(1);
                    expect(credential_provider_imds_1.fromContainerMetadata().mock.calls.length).toBe(0);
                    expect(credential_provider_imds_1.fromInstanceMetadata().mock.calls.length).toBe(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should continue on to the IMDS provider if no env or ini credentials have been found', function () { return __awaiter(_this, void 0, void 0, function () {
        var creds, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    creds = {
                        accessKeyId: 'foo',
                        secretAccessKey: 'bar',
                    };
                    credential_provider_env_1.fromEnv().mockImplementation(function () { return Promise.reject(new credential_provider_base_1.CredentialError('Keep moving!')); });
                    credential_provider_ini_1.fromIni().mockImplementation(function () { return Promise.reject(new credential_provider_base_1.CredentialError('Nothing here!')); });
                    credential_provider_imds_1.fromInstanceMetadata().mockImplementation(function () { return Promise.resolve(creds); });
                    _a = expect;
                    return [4 /*yield*/, _1.defaultProvider()()];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toEqual(creds);
                    expect(credential_provider_env_1.fromEnv().mock.calls.length).toBe(1);
                    expect(credential_provider_ini_1.fromIni().mock.calls.length).toBe(1);
                    expect(credential_provider_imds_1.fromContainerMetadata().mock.calls.length).toBe(0);
                    expect(credential_provider_imds_1.fromInstanceMetadata().mock.calls.length).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should continue on to the ECS IMDS provider if no env or ini credentials have been found and an ECS environment variable has been set', function () { return __awaiter(_this, void 0, void 0, function () {
        var creds, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    creds = {
                        accessKeyId: 'foo',
                        secretAccessKey: 'bar',
                    };
                    credential_provider_env_1.fromEnv().mockImplementation(function () { return Promise.reject(new credential_provider_base_1.CredentialError('Keep moving!')); });
                    credential_provider_ini_1.fromIni().mockImplementation(function () { return Promise.reject(new credential_provider_base_1.CredentialError('Nothing here!')); });
                    credential_provider_imds_1.fromInstanceMetadata().mockImplementation(function () { return Promise.reject(new Error('PANIC')); });
                    credential_provider_imds_1.fromContainerMetadata().mockImplementation(function () { return Promise.resolve(creds); });
                    process.env[credential_provider_imds_1.ENV_CMDS_RELATIVE_URI] = '/credentials';
                    _a = expect;
                    return [4 /*yield*/, _1.defaultProvider()()];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toEqual(creds);
                    expect(credential_provider_env_1.fromEnv().mock.calls.length).toBe(1);
                    expect(credential_provider_ini_1.fromIni().mock.calls.length).toBe(1);
                    expect(credential_provider_imds_1.fromContainerMetadata().mock.calls.length).toBe(1);
                    expect(credential_provider_imds_1.fromInstanceMetadata().mock.calls.length).toBe(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should pass configuration on to the ini provider', function () { return __awaiter(_this, void 0, void 0, function () {
        var iniConfig;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    iniConfig = {
                        profile: 'foo',
                        mfaCodeProvider: function () { return Promise.resolve('mfaCode'); },
                        roleAssumer: function () { return Promise.resolve({
                            accessKeyId: 'fizz',
                            secretAccessKey: 'buzz',
                        }); },
                        filepath: '/home/user/.secrets/credentials.ini',
                        configFilepath: '/home/user/.secrets/credentials.ini',
                    };
                    credential_provider_env_1.fromEnv().mockImplementation(function () { return Promise.reject(new credential_provider_base_1.CredentialError('Keep moving!')); });
                    credential_provider_ini_1.fromIni().mockImplementation(function () { return Promise.resolve({
                        accessKeyId: 'foo',
                        secretAccessKey: 'bar',
                    }); });
                    credential_provider_ini_1.fromIni.mockClear();
                    return [4 /*yield*/, expect(_1.defaultProvider(iniConfig)()).resolves];
                case 1:
                    _a.sent();
                    expect(credential_provider_ini_1.fromIni.mock.calls.length).toBe(1);
                    expect(credential_provider_ini_1.fromIni.mock.calls[0][0]).toBe(iniConfig);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should pass configuration on to the IMDS provider', function () { return __awaiter(_this, void 0, void 0, function () {
        var imdsConfig;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imdsConfig = {
                        profile: 'foo',
                        timeout: 2000,
                        maxRetries: 3,
                    };
                    credential_provider_env_1.fromEnv().mockImplementation(function () { return Promise.reject(new credential_provider_base_1.CredentialError('Keep moving!')); });
                    credential_provider_ini_1.fromIni().mockImplementation(function () { return Promise.reject(new credential_provider_base_1.CredentialError('Nothing here!')); });
                    credential_provider_imds_1.fromInstanceMetadata().mockImplementation(function () { return Promise.resolve({
                        accessKeyId: 'foo',
                        secretAccessKey: 'bar',
                    }); });
                    credential_provider_imds_1.fromInstanceMetadata.mockClear();
                    return [4 /*yield*/, expect(_1.defaultProvider(imdsConfig)()).resolves];
                case 1:
                    _a.sent();
                    expect(credential_provider_imds_1.fromInstanceMetadata.mock.calls.length).toBe(1);
                    expect(credential_provider_imds_1.fromInstanceMetadata.mock.calls[0][0]).toBe(imdsConfig);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should pass configuration on to the ECS IMDS provider', function () { return __awaiter(_this, void 0, void 0, function () {
        var ecsImdsConfig;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ecsImdsConfig = {
                        timeout: 2000,
                        maxRetries: 3,
                    };
                    credential_provider_env_1.fromEnv().mockImplementation(function () { return Promise.reject(new credential_provider_base_1.CredentialError('Keep moving!')); });
                    credential_provider_ini_1.fromIni().mockImplementation(function () { return Promise.reject(new credential_provider_base_1.CredentialError('Nothing here!')); });
                    credential_provider_imds_1.fromContainerMetadata().mockImplementation(function () { return Promise.resolve({
                        accessKeyId: 'foo',
                        secretAccessKey: 'bar',
                    }); });
                    credential_provider_imds_1.fromContainerMetadata.mockClear();
                    process.env[credential_provider_imds_1.ENV_CMDS_RELATIVE_URI] = '/credentials';
                    return [4 /*yield*/, expect(_1.defaultProvider(ecsImdsConfig)()).resolves];
                case 1:
                    _a.sent();
                    expect(credential_provider_imds_1.fromContainerMetadata.mock.calls.length).toBe(1);
                    expect(credential_provider_imds_1.fromContainerMetadata.mock.calls[0][0]).toBe(ecsImdsConfig);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return the same promise across invocations', function () { return __awaiter(_this, void 0, void 0, function () {
        var creds, provider, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    creds = {
                        accessKeyId: 'foo',
                        secretAccessKey: 'bar',
                    };
                    credential_provider_env_1.fromEnv().mockImplementation(function () { return Promise.resolve(creds); });
                    provider = _1.defaultProvider();
                    _a = expect;
                    return [4 /*yield*/, provider()];
                case 1:
                    _a.apply(void 0, [_c.sent()]).toEqual(creds);
                    expect(provider()).toBe(provider());
                    _b = expect;
                    return [4 /*yield*/, provider()];
                case 2:
                    _b.apply(void 0, [_c.sent()]).toEqual(creds);
                    expect(credential_provider_env_1.fromEnv().mock.calls.length).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQW9PQTs7QUFwT0EsdUJBQW1DO0FBQ25DLDBFQUE4RDtBQUU5RCxJQUFJLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFFO0lBQ3RDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUM5QixNQUFNLENBQUM7UUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFNLE9BQUEsV0FBVyxFQUFYLENBQVcsQ0FBQztLQUN0QyxDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUM7QUFDSCx3RUFBcUQ7QUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRTtJQUN0QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDOUIsTUFBTSxDQUFDO1FBQ0gsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBTSxPQUFBLFdBQVcsRUFBWCxDQUFXLENBQUM7S0FDdEMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDO0FBQ0gsd0VBQWtFO0FBRWxFLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUU7SUFDdkMsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDdkMsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDdEMsTUFBTSxDQUFDO1FBQ0gscUJBQXFCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLENBQUM7UUFDMUQsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLENBQUM7S0FDM0Qs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USxFQUFFLEVBQUE7O29CQUF2QixrQkFBTyxTQUFnQixFQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUV4QyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFFcEMsS0FBQSxNQUFNLENBQUE7b0JBQUMscUJBQU0sUUFBUSxFQUFFLEVBQUE7O29CQUF2QixrQkFBTyxTQUFnQixFQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QyxNQUFNLENBQUUsaUNBQU8sRUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O1NBQ3hELENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkZWZhdWx0UHJvdmlkZXJ9IGZyb20gXCIuL1wiO1xuaW1wb3J0IHtDcmVkZW50aWFsRXJyb3J9IGZyb20gXCJAYXdzL2NyZWRlbnRpYWwtcHJvdmlkZXItYmFzZVwiO1xuXG5qZXN0Lm1vY2soJ0Bhd3MvY3JlZGVudGlhbC1wcm92aWRlci1lbnYnLCAoKSA9PiB7XG4gICAgY29uc3QgZW52UHJvdmlkZXIgPSBqZXN0LmZuKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnJvbUVudjogamVzdC5mbigoKSA9PiBlbnZQcm92aWRlciksXG4gICAgfTtcbn0pO1xuaW1wb3J0IHtmcm9tRW52fSBmcm9tICdAYXdzL2NyZWRlbnRpYWwtcHJvdmlkZXItZW52JztcblxuamVzdC5tb2NrKCdAYXdzL2NyZWRlbnRpYWwtcHJvdmlkZXItaW5pJywgKCkgPT4ge1xuICAgIGNvbnN0IGluaVByb3ZpZGVyID0gamVzdC5mbigpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGZyb21Jbmk6IGplc3QuZm4oKCkgPT4gaW5pUHJvdmlkZXIpLFxuICAgIH07XG59KTtcbmltcG9ydCB7ZnJvbUluaSwgRnJvbUluaUluaXR9IGZyb20gJ0Bhd3MvY3JlZGVudGlhbC1wcm92aWRlci1pbmknO1xuXG5qZXN0Lm1vY2soJ0Bhd3MvY3JlZGVudGlhbC1wcm92aWRlci1pbWRzJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lck1kc1Byb3ZpZGVyID0gamVzdC5mbigpO1xuICAgIGNvbnN0IGluc3RhbmNlTWRzUHJvdmlkZXIgPSBqZXN0LmZuKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnJvbUNvbnRhaW5lck1ldGFkYXRhOiBqZXN0LmZuKCgpID0+IGNvbnRhaW5lck1kc1Byb3ZpZGVyKSxcbiAgICAgICAgZnJvbUluc3RhbmNlTWV0YWRhdGE6IGplc3QuZm4oKCkgPT4gaW5zdGFuY2VNZHNQcm92aWRlciksXG4gICAgfTtcbn0pO1xuaW1wb3J0IHtcbiAgICBFYzJJbnN0YW5jZU1ldGFkYXRhSW5pdCxcbiAgICBFTlZfQ01EU19GVUxMX1VSSSxcbiAgICBFTlZfQ01EU19SRUxBVElWRV9VUkksXG4gICAgZnJvbUNvbnRhaW5lck1ldGFkYXRhLFxuICAgIGZyb21JbnN0YW5jZU1ldGFkYXRhLFxuICAgIFJlbW90ZVByb3ZpZGVySW5pdCxcbn0gZnJvbSAnQGF3cy9jcmVkZW50aWFsLXByb3ZpZGVyLWltZHMnO1xuXG5jb25zdCBmdWxsVXJpID0gcHJvY2Vzcy5lbnZbRU5WX0NNRFNfRlVMTF9VUkldO1xuY29uc3QgcmVsYXRpdmVVcmkgPSBwcm9jZXNzLmVudltFTlZfQ01EU19SRUxBVElWRV9VUkldO1xuXG5iZWZvcmVFYWNoKCgpID0+IHtcbiAgICBkZWxldGUgcHJvY2Vzcy5lbnZbRU5WX0NNRFNfRlVMTF9VUkldO1xuICAgIGRlbGV0ZSBwcm9jZXNzLmVudltFTlZfQ01EU19SRUxBVElWRV9VUkldO1xuXG4gICAgKGZyb21FbnYoKSBhcyBhbnkpLm1vY2tDbGVhcigpO1xuICAgIChmcm9tSW5pKCkgYXMgYW55KS5tb2NrQ2xlYXIoKTtcbiAgICAoZnJvbUNvbnRhaW5lck1ldGFkYXRhKCkgYXMgYW55KS5tb2NrQ2xlYXIoKTtcbiAgICAoZnJvbUluc3RhbmNlTWV0YWRhdGEoKSBhcyBhbnkpLm1vY2tDbGVhcigpO1xuICAgIChmcm9tRW52IGFzIGFueSkubW9ja0NsZWFyKCk7XG4gICAgKGZyb21JbmkgYXMgYW55KS5tb2NrQ2xlYXIoKTtcbiAgICAoZnJvbUNvbnRhaW5lck1ldGFkYXRhIGFzIGFueSkubW9ja0NsZWFyKCk7XG4gICAgKGZyb21JbnN0YW5jZU1ldGFkYXRhIGFzIGFueSkubW9ja0NsZWFyKCk7XG59KTtcblxuYWZ0ZXJBbGwoKCkgPT4ge1xuICAgIHByb2Nlc3MuZW52W0VOVl9DTURTX0ZVTExfVVJJXSA9IGZ1bGxVcmk7XG4gICAgcHJvY2Vzcy5lbnZbRU5WX0NNRFNfUkVMQVRJVkVfVVJJXSA9IHJlbGF0aXZlVXJpO1xufSk7XG5cbmRlc2NyaWJlKCdkZWZhdWx0UHJvdmlkZXInLCAoKSA9PiB7XG4gICAgaXQoXG4gICAgICAgICdzaG91bGQgc3RvcCBhZnRlciB0aGUgZW52aXJvbm1lbnRhbCBwcm92aWRlciBpZiBjcmVkZW50aWFscyBoYXZlIGJlZW4gZm91bmQnLFxuICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjcmVkcyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogJ2ZvbycsXG4gICAgICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiAnYmFyJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIChmcm9tRW52KCkgYXMgYW55KS5tb2NrSW1wbGVtZW50YXRpb24oKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGNyZWRzKSk7XG5cbiAgICAgICAgICAgIGV4cGVjdChhd2FpdCBkZWZhdWx0UHJvdmlkZXIoKSgpKS50b0VxdWFsKGNyZWRzKTtcbiAgICAgICAgICAgIGV4cGVjdCgoZnJvbUVudigpIGFzIGFueSkubW9jay5jYWxscy5sZW5ndGgpLnRvQmUoMSk7XG4gICAgICAgICAgICBleHBlY3QoKGZyb21JbmkoKSBhcyBhbnkpLm1vY2suY2FsbHMubGVuZ3RoKS50b0JlKDApO1xuICAgICAgICAgICAgZXhwZWN0KChmcm9tQ29udGFpbmVyTWV0YWRhdGEoKSBhcyBhbnkpLm1vY2suY2FsbHMubGVuZ3RoKS50b0JlKDApO1xuICAgICAgICAgICAgZXhwZWN0KChmcm9tSW5zdGFuY2VNZXRhZGF0YSgpIGFzIGFueSkubW9jay5jYWxscy5sZW5ndGgpLnRvQmUoMCk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgaXQoXG4gICAgICAgICdzaG91bGQgc3RvcCBhZnRlciB0aGUgaW5pIHByb3ZpZGVyIGlmIGNyZWRlbnRpYWxzIGhhdmUgYmVlbiBmb3VuZCcsXG4gICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWRzID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiAnZm9vJyxcbiAgICAgICAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6ICdiYXInLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgKGZyb21FbnYoKSBhcyBhbnkpLm1vY2tJbXBsZW1lbnRhdGlvbigoKSA9PiBQcm9taXNlLnJlamVjdChuZXcgQ3JlZGVudGlhbEVycm9yKCdOb3RoaW5nIGhlcmUhJykpKTtcbiAgICAgICAgICAgIChmcm9tSW5pKCkgYXMgYW55KS5tb2NrSW1wbGVtZW50YXRpb24oKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGNyZWRzKSk7XG5cbiAgICAgICAgICAgIGV4cGVjdChhd2FpdCBkZWZhdWx0UHJvdmlkZXIoKSgpKS50b0VxdWFsKGNyZWRzKTtcbiAgICAgICAgICAgIGV4cGVjdCgoZnJvbUVudigpIGFzIGFueSkubW9jay5jYWxscy5sZW5ndGgpLnRvQmUoMSk7XG4gICAgICAgICAgICBleHBlY3QoKGZyb21JbmkoKSBhcyBhbnkpLm1vY2suY2FsbHMubGVuZ3RoKS50b0JlKDEpO1xuICAgICAgICAgICAgZXhwZWN0KChmcm9tQ29udGFpbmVyTWV0YWRhdGEoKSBhcyBhbnkpLm1vY2suY2FsbHMubGVuZ3RoKS50b0JlKDApO1xuICAgICAgICAgICAgZXhwZWN0KChmcm9tSW5zdGFuY2VNZXRhZGF0YSgpIGFzIGFueSkubW9jay5jYWxscy5sZW5ndGgpLnRvQmUoMCk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgaXQoXG4gICAgICAgICdzaG91bGQgY29udGludWUgb24gdG8gdGhlIElNRFMgcHJvdmlkZXIgaWYgbm8gZW52IG9yIGluaSBjcmVkZW50aWFscyBoYXZlIGJlZW4gZm91bmQnLFxuICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjcmVkcyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogJ2ZvbycsXG4gICAgICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiAnYmFyJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIChmcm9tRW52KCkgYXMgYW55KS5tb2NrSW1wbGVtZW50YXRpb24oKCkgPT4gUHJvbWlzZS5yZWplY3QobmV3IENyZWRlbnRpYWxFcnJvcignS2VlcCBtb3ZpbmchJykpKTtcbiAgICAgICAgICAgIChmcm9tSW5pKCkgYXMgYW55KS5tb2NrSW1wbGVtZW50YXRpb24oKCkgPT4gUHJvbWlzZS5yZWplY3QobmV3IENyZWRlbnRpYWxFcnJvcignTm90aGluZyBoZXJlIScpKSk7XG4gICAgICAgICAgICAoZnJvbUluc3RhbmNlTWV0YWRhdGEoKSBhcyBhbnkpLm1vY2tJbXBsZW1lbnRhdGlvbigoKSA9PiBQcm9taXNlLnJlc29sdmUoY3JlZHMpKTtcblxuICAgICAgICAgICAgZXhwZWN0KGF3YWl0IGRlZmF1bHRQcm92aWRlcigpKCkpLnRvRXF1YWwoY3JlZHMpO1xuICAgICAgICAgICAgZXhwZWN0KChmcm9tRW52KCkgYXMgYW55KS5tb2NrLmNhbGxzLmxlbmd0aCkudG9CZSgxKTtcbiAgICAgICAgICAgIGV4cGVjdCgoZnJvbUluaSgpIGFzIGFueSkubW9jay5jYWxscy5sZW5ndGgpLnRvQmUoMSk7XG4gICAgICAgICAgICBleHBlY3QoKGZyb21Db250YWluZXJNZXRhZGF0YSgpIGFzIGFueSkubW9jay5jYWxscy5sZW5ndGgpLnRvQmUoMCk7XG4gICAgICAgICAgICBleHBlY3QoKGZyb21JbnN0YW5jZU1ldGFkYXRhKCkgYXMgYW55KS5tb2NrLmNhbGxzLmxlbmd0aCkudG9CZSgxKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBpdChcbiAgICAgICAgJ3Nob3VsZCBjb250aW51ZSBvbiB0byB0aGUgRUNTIElNRFMgcHJvdmlkZXIgaWYgbm8gZW52IG9yIGluaSBjcmVkZW50aWFscyBoYXZlIGJlZW4gZm91bmQgYW5kIGFuIEVDUyBlbnZpcm9ubWVudCB2YXJpYWJsZSBoYXMgYmVlbiBzZXQnLFxuICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjcmVkcyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogJ2ZvbycsXG4gICAgICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiAnYmFyJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIChmcm9tRW52KCkgYXMgYW55KS5tb2NrSW1wbGVtZW50YXRpb24oKCkgPT4gUHJvbWlzZS5yZWplY3QobmV3IENyZWRlbnRpYWxFcnJvcignS2VlcCBtb3ZpbmchJykpKTtcbiAgICAgICAgICAgIChmcm9tSW5pKCkgYXMgYW55KS5tb2NrSW1wbGVtZW50YXRpb24oKCkgPT4gUHJvbWlzZS5yZWplY3QobmV3IENyZWRlbnRpYWxFcnJvcignTm90aGluZyBoZXJlIScpKSk7XG4gICAgICAgICAgICAoZnJvbUluc3RhbmNlTWV0YWRhdGEoKSBhcyBhbnkpLm1vY2tJbXBsZW1lbnRhdGlvbigoKSA9PiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1BBTklDJykpKTtcbiAgICAgICAgICAgIChmcm9tQ29udGFpbmVyTWV0YWRhdGEoKSBhcyBhbnkpLm1vY2tJbXBsZW1lbnRhdGlvbigoKSA9PiBQcm9taXNlLnJlc29sdmUoY3JlZHMpKTtcblxuICAgICAgICAgICAgcHJvY2Vzcy5lbnZbRU5WX0NNRFNfUkVMQVRJVkVfVVJJXSA9ICcvY3JlZGVudGlhbHMnO1xuXG4gICAgICAgICAgICBleHBlY3QoYXdhaXQgZGVmYXVsdFByb3ZpZGVyKCkoKSkudG9FcXVhbChjcmVkcyk7XG4gICAgICAgICAgICBleHBlY3QoKGZyb21FbnYoKSBhcyBhbnkpLm1vY2suY2FsbHMubGVuZ3RoKS50b0JlKDEpO1xuICAgICAgICAgICAgZXhwZWN0KChmcm9tSW5pKCkgYXMgYW55KS5tb2NrLmNhbGxzLmxlbmd0aCkudG9CZSgxKTtcbiAgICAgICAgICAgIGV4cGVjdCgoZnJvbUNvbnRhaW5lck1ldGFkYXRhKCkgYXMgYW55KS5tb2NrLmNhbGxzLmxlbmd0aCkudG9CZSgxKTtcbiAgICAgICAgICAgIGV4cGVjdCgoZnJvbUluc3RhbmNlTWV0YWRhdGEoKSBhcyBhbnkpLm1vY2suY2FsbHMubGVuZ3RoKS50b0JlKDApO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIGl0KCdzaG91bGQgcGFzcyBjb25maWd1cmF0aW9uIG9uIHRvIHRoZSBpbmkgcHJvdmlkZXInLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluaUNvbmZpZzogRnJvbUluaUluaXQgPSB7XG4gICAgICAgICAgICBwcm9maWxlOiAnZm9vJyxcbiAgICAgICAgICAgIG1mYUNvZGVQcm92aWRlcjogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCdtZmFDb2RlJyksXG4gICAgICAgICAgICByb2xlQXNzdW1lcjogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXlJZDogJ2ZpenonLFxuICAgICAgICAgICAgICAgIHNlY3JldEFjY2Vzc0tleTogJ2J1enonLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmaWxlcGF0aDogJy9ob21lL3VzZXIvLnNlY3JldHMvY3JlZGVudGlhbHMuaW5pJyxcbiAgICAgICAgICAgIGNvbmZpZ0ZpbGVwYXRoOiAnL2hvbWUvdXNlci8uc2VjcmV0cy9jcmVkZW50aWFscy5pbmknLFxuICAgICAgICB9O1xuXG4gICAgICAgIChmcm9tRW52KCkgYXMgYW55KS5tb2NrSW1wbGVtZW50YXRpb24oKCkgPT4gUHJvbWlzZS5yZWplY3QobmV3IENyZWRlbnRpYWxFcnJvcignS2VlcCBtb3ZpbmchJykpKTtcbiAgICAgICAgKGZyb21JbmkoKSBhcyBhbnkpLm1vY2tJbXBsZW1lbnRhdGlvbigoKSA9PiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgYWNjZXNzS2V5SWQ6ICdmb28nLFxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiAnYmFyJyxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIChmcm9tSW5pIGFzIGFueSkubW9ja0NsZWFyKCk7XG5cbiAgICAgICAgYXdhaXQgZXhwZWN0KGRlZmF1bHRQcm92aWRlcihpbmlDb25maWcpKCkpLnJlc29sdmVzO1xuXG4gICAgICAgIGV4cGVjdCgoZnJvbUluaSBhcyBhbnkpLm1vY2suY2FsbHMubGVuZ3RoKS50b0JlKDEpO1xuICAgICAgICBleHBlY3QoKGZyb21JbmkgYXMgYW55KS5tb2NrLmNhbGxzWzBdWzBdKS50b0JlKGluaUNvbmZpZyk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHBhc3MgY29uZmlndXJhdGlvbiBvbiB0byB0aGUgSU1EUyBwcm92aWRlcicsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgaW1kc0NvbmZpZzogRWMySW5zdGFuY2VNZXRhZGF0YUluaXQgPSB7XG4gICAgICAgICAgICBwcm9maWxlOiAnZm9vJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAsXG4gICAgICAgICAgICBtYXhSZXRyaWVzOiAzLFxuICAgICAgICB9O1xuXG4gICAgICAgIChmcm9tRW52KCkgYXMgYW55KS5tb2NrSW1wbGVtZW50YXRpb24oKCkgPT4gUHJvbWlzZS5yZWplY3QobmV3IENyZWRlbnRpYWxFcnJvcignS2VlcCBtb3ZpbmchJykpKTtcbiAgICAgICAgKGZyb21JbmkoKSBhcyBhbnkpLm1vY2tJbXBsZW1lbnRhdGlvbigoKSA9PiBQcm9taXNlLnJlamVjdChuZXcgQ3JlZGVudGlhbEVycm9yKCdOb3RoaW5nIGhlcmUhJykpKTtcbiAgICAgICAgKGZyb21JbnN0YW5jZU1ldGFkYXRhKCkgYXMgYW55KS5tb2NrSW1wbGVtZW50YXRpb24oKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIGFjY2Vzc0tleUlkOiAnZm9vJyxcbiAgICAgICAgICAgIHNlY3JldEFjY2Vzc0tleTogJ2JhcicsXG4gICAgICAgIH0pKTtcblxuICAgICAgICAoZnJvbUluc3RhbmNlTWV0YWRhdGEgYXMgYW55KS5tb2NrQ2xlYXIoKTtcblxuICAgICAgICBhd2FpdCBleHBlY3QoZGVmYXVsdFByb3ZpZGVyKGltZHNDb25maWcpKCkpLnJlc29sdmVzO1xuXG4gICAgICAgIGV4cGVjdCgoZnJvbUluc3RhbmNlTWV0YWRhdGEgYXMgYW55KS5tb2NrLmNhbGxzLmxlbmd0aCkudG9CZSgxKTtcbiAgICAgICAgZXhwZWN0KChmcm9tSW5zdGFuY2VNZXRhZGF0YSBhcyBhbnkpLm1vY2suY2FsbHNbMF1bMF0pLnRvQmUoaW1kc0NvbmZpZyk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHBhc3MgY29uZmlndXJhdGlvbiBvbiB0byB0aGUgRUNTIElNRFMgcHJvdmlkZXInLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVjc0ltZHNDb25maWc6IFJlbW90ZVByb3ZpZGVySW5pdCA9IHtcbiAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAsXG4gICAgICAgICAgICBtYXhSZXRyaWVzOiAzLFxuICAgICAgICB9O1xuXG4gICAgICAgIChmcm9tRW52KCkgYXMgYW55KS5tb2NrSW1wbGVtZW50YXRpb24oKCkgPT4gUHJvbWlzZS5yZWplY3QobmV3IENyZWRlbnRpYWxFcnJvcignS2VlcCBtb3ZpbmchJykpKTtcbiAgICAgICAgKGZyb21JbmkoKSBhcyBhbnkpLm1vY2tJbXBsZW1lbnRhdGlvbigoKSA9PiBQcm9taXNlLnJlamVjdChuZXcgQ3JlZGVudGlhbEVycm9yKCdOb3RoaW5nIGhlcmUhJykpKTtcbiAgICAgICAgKGZyb21Db250YWluZXJNZXRhZGF0YSgpIGFzIGFueSkubW9ja0ltcGxlbWVudGF0aW9uKCgpID0+IFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBhY2Nlc3NLZXlJZDogJ2ZvbycsXG4gICAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6ICdiYXInLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgKGZyb21Db250YWluZXJNZXRhZGF0YSBhcyBhbnkpLm1vY2tDbGVhcigpO1xuXG4gICAgICAgIHByb2Nlc3MuZW52W0VOVl9DTURTX1JFTEFUSVZFX1VSSV0gPSAnL2NyZWRlbnRpYWxzJztcblxuICAgICAgICBhd2FpdCBleHBlY3QoZGVmYXVsdFByb3ZpZGVyKGVjc0ltZHNDb25maWcpKCkpLnJlc29sdmVzO1xuXG4gICAgICAgIGV4cGVjdCgoZnJvbUNvbnRhaW5lck1ldGFkYXRhIGFzIGFueSkubW9jay5jYWxscy5sZW5ndGgpLnRvQmUoMSk7XG4gICAgICAgIGV4cGVjdCgoZnJvbUNvbnRhaW5lck1ldGFkYXRhIGFzIGFueSkubW9jay5jYWxsc1swXVswXSkudG9CZShlY3NJbWRzQ29uZmlnKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRoZSBzYW1lIHByb21pc2UgYWNyb3NzIGludm9jYXRpb25zJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjcmVkcyA9IHtcbiAgICAgICAgICAgIGFjY2Vzc0tleUlkOiAnZm9vJyxcbiAgICAgICAgICAgIHNlY3JldEFjY2Vzc0tleTogJ2JhcicsXG4gICAgICAgIH07XG5cbiAgICAgICAgKGZyb21FbnYoKSBhcyBhbnkpLm1vY2tJbXBsZW1lbnRhdGlvbigoKSA9PiBQcm9taXNlLnJlc29sdmUoY3JlZHMpKTtcblxuICAgICAgICBjb25zdCBwcm92aWRlciA9IGRlZmF1bHRQcm92aWRlcigpO1xuXG4gICAgICAgIGV4cGVjdChhd2FpdCBwcm92aWRlcigpKS50b0VxdWFsKGNyZWRzKTtcblxuICAgICAgICBleHBlY3QocHJvdmlkZXIoKSkudG9CZShwcm92aWRlcigpKTtcblxuICAgICAgICBleHBlY3QoYXdhaXQgcHJvdmlkZXIoKSkudG9FcXVhbChjcmVkcyk7XG4gICAgICAgIGV4cGVjdCgoZnJvbUVudigpIGFzIGFueSkubW9jay5jYWxscy5sZW5ndGgpLnRvQmUoMSk7XG4gICAgfSk7XG59KTtcbiJdfQ==