import { __awaiter, __generator } from "tslib";
import { IndexedDbStorage } from "./IndexedDbStorage";
describe("IndexedDbStorage", function () {
    var testFunc = typeof indexedDB !== "undefined" ? it : xit;
    testFunc("should remember key-value pairs", function () { return __awaiter(void 0, void 0, void 0, function () {
        var storage, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    storage = new IndexedDbStorage();
                    return [4 /*yield*/, storage.setItem("foo", "bar")];
                case 1:
                    _b.sent();
                    _a = expect;
                    return [4 /*yield*/, storage.getItem("foo")];
                case 2:
                    _a.apply(void 0, [_b.sent()]).toBe("bar");
                    return [2 /*return*/];
            }
        });
    }); });
    testFunc("should return `null` when no item is found for a key", function () { return __awaiter(void 0, void 0, void 0, function () {
        var storage, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    storage = new IndexedDbStorage();
                    _a = expect;
                    return [4 /*yield*/, storage.getItem("foo")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toBe(null);
                    return [2 /*return*/];
            }
        });
    }); });
    testFunc("should allow keys to be removed from storage", function () { return __awaiter(void 0, void 0, void 0, function () {
        var storage, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    storage = new IndexedDbStorage();
                    return [4 /*yield*/, storage.setItem("foo", "bar")];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, storage.removeItem("foo")];
                case 2:
                    _b.sent();
                    _a = expect;
                    return [4 /*yield*/, storage.getItem("foo")];
                case 3:
                    _a.apply(void 0, [_b.sent()]).toBe(null);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=IndexedDbStorage.spec.js.map