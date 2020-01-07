import { __read } from "tslib";
/**
 * @internal
 */
export function resolveLogins(logins) {
    return Promise.all(Object.keys(logins).reduce(function (arr, name) {
        var tokenOrProvider = logins[name];
        if (typeof tokenOrProvider === "string") {
            arr.push([name, tokenOrProvider]);
        }
        else {
            arr.push(tokenOrProvider().then(function (token) { return [name, token]; }));
        }
        return arr;
    }, [])).then(function (resolvedPairs) {
        return resolvedPairs.reduce(function (logins, _a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            logins[key] = value;
            return logins;
        }, {});
    });
}
//# sourceMappingURL=resolveLogins.js.map