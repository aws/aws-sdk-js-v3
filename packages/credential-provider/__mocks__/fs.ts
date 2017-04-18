interface FsModule {
    __addMatcher: (toMatch: RegExp, toReturn: string) => void;
    __clearMatchers: () => void;
    readFile: (path: string, encoding: string, cb: Function) => void
}

const fs: FsModule = <FsModule>jest.genMockFromModule('fs');
const matchers = new Map<RegExp, string>();

function __addMatcher(toMatch: RegExp, toReturn: string): void {
    matchers.set(toMatch, toReturn);
}

function __clearMatchers(): void {
    matchers.clear();
}

function readFile(
    path: string,
    encoding: string,
    callback: (err: Error|null, data?: string) => void
): void {
    for (let [matcher, data] of matchers.entries()) {
        if (matcher.test(path)) {
            callback(null, data);
            return;
        }
    }

    callback(new Error('ENOENT: no such file or directory'));
}

fs.__addMatcher = __addMatcher;
fs.__clearMatchers = __clearMatchers;
fs.readFile = readFile;

module.exports = fs;
