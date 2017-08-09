"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
describe('isIterable', function () {
    it('should return true when input is string', function () {
        expect(_1.isIterable('string')).toBe(true);
    });
    it('should return true when input is a list', function () {
        expect(_1.isIterable([1, 2, 3])).toBe(true);
    });
    it('should return true when input is an empty list', function () {
        expect(_1.isIterable([])).toBe(true);
    });
    var _loop_1 = function (scalar) {
        it('should return false when input is null, undefined, boolean and object', function () {
            expect(_1.isIterable(scalar)).toBe(false);
        });
    };
    for (var _i = 0, _a = [null, {}, undefined, void 0, true]; _i < _a.length; _i++) {
        var scalar = _a[_i];
        _loop_1(scalar);
    }
    var iterator = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, 0];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, 1];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
    it('should return true when input is an iterator', function () {
        expect(_1.isIterable(iterator())).toBe(true);
    });
});
//# sourceMappingURL=index.js.map