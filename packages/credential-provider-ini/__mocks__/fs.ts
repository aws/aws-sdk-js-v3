interface FsModule {
    __addMatcher(toMatch: string, toReturn: string): void;
    __clearMatchers(): void;
    readFile: (path: string, encoding: string, cb: Function) => void
}

const fs: FsModule = <FsModule>jest.genMockFromModule('fs');
let matchers: {[key: string]: string} = {};

function __addMatcher(toMatch: string, toReturn: string): void {
    matchers[toMatch] = toReturn;
}

function __clearMatchers(): void {
    matchers = {};
}

function readFile(
    path: string,
    encoding: string,
    callback: (err: Error|null, data?: string) => void
): void {
    for (let key of Object.keys(matchers)) {
        if (key === path) {
            callback(null, matchers[key]);
            return;
        }
    }

    callback(new Error('ENOENT: no such file or directory'));
}

fs.__addMatcher = __addMatcher;
fs.__clearMatchers = __clearMatchers;
fs.readFile = readFile;

module.exports = fs;
