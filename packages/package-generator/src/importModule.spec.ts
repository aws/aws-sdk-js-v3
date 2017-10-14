import {importModule} from "./importModule";
import {ModuleGenerator} from "./ModuleGenerator";
import {dirname, join} from 'path';

jest.mock('crypto', () => {
    const Buffer = require('buffer').Buffer;
    return {randomBytes: jest.fn(length => new Buffer(length))};
});
import {randomBytes} from 'crypto';

jest.mock('fs', () => {
    return {
        mkdirSync: jest.fn(),
        renameSync: jest.fn(),
        writeFileSync: jest.fn(),
    };
});
import {mkdirSync, renameSync, writeFileSync} from 'fs';

jest.mock('os', () => {
    return {tmpdir: jest.fn(() => 'foo')};
});
import {tmpdir} from 'os';

describe('importModule', () => {
    const name = 'bar';
    const generator = new ModuleGenerator({name});

    beforeEach(() => {
        (randomBytes as any).mockClear();
        (mkdirSync as any).mockClear();
        (renameSync as any).mockClear();
        (writeFileSync as any).mockClear();
        (tmpdir as any).mockClear();
    });

    it(
        'should create a temporary directory to house the module during generation',
        () => {
            importModule(generator);

            expect((tmpdir as any).mock.calls.length).toBe(1);
            expect((randomBytes as any).mock.calls.length).toBe(1);
            expect((mkdirSync as any).mock.calls.length).toBe(1);
            expect((mkdirSync as any).mock.calls[0][0])
                .toBe(join('foo', '00000000000000000000000000000000'));
        }
    );

    it(
        'should write all files yielded by the generator to a temporary directory',
        () => {
            importModule(generator);

            expect((writeFileSync as any).mock.calls)
                .toEqual([...generator].map(([filename, contents]) => [
                    join('foo', '00000000000000000000000000000000', filename),
                    contents,
                ]));
        }
    );

    it(
        'should move the temporary directory into the repository as a package with the provided name',
        () => {
            importModule(generator);

            expect((renameSync as any).mock.calls.length).toBe(1);
            expect((renameSync as any).mock.calls[0]).toEqual([
                join('foo', '00000000000000000000000000000000'),
                join(dirname(dirname(__dirname)), name)
            ]);
        }
    );
});
