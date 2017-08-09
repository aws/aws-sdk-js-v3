"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIterable(arg) {
    return Boolean(arg)
        && typeof Symbol !== 'undefined'
        && typeof arg[Symbol.iterator] === 'function';
}
exports.isIterable = isIterable;
//# sourceMappingURL=index.js.map