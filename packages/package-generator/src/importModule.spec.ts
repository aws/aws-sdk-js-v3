import {importModule} from "./importModule";
import {ModuleGenerator} from "./ModuleGenerator";
import {dirname, join} from 'path';

jest.mock('fs', () => {
    return {
        mkdirSync: jest.fn(),
        mkdtempSync: jest.fn(prefix => `${prefix}01234`),
        renameSync: jest.fn(),
        statSync: jest.fn(),
        writeFileSync: jest.fn(),
    };
});
import {mkdirSync, mkdtempSync, renameSync, statSync, writeFileSync} from 'fs';

jest.mock('os', () => {
    return {tmpdir: jest.fn(() => 'foo')};
});
import {tmpdir} from 'os';

describe('importModule', () => {
    const name = 'bar';
    const generator = new ModuleGenerator({name});

    beforeEach(() => {
        (mkdirSync as any).mockClear();
        (mkdtempSync as any).mockClear();
        (renameSync as any).mockClear();
        (statSync as any).mockClear();
        (writeFileSync as any).mockClear();
        (tmpdir as any).mockClear();
    });

    it(
        'should create a temporary directory to house the module during generation',
        () => {
            importModule(generator);

            expect((tmpdir as any).mock.calls.length).toBe(1);
            expect((mkdtempSync as any).mock.calls.length).toBe(1);
        }
    );

    it(
        'should create subdirectories in the temporary directory as necessary',
        () => {
            debugger;
            const moduleRoot = join('foo', '01234');
            const created = new Set([moduleRoot]);
            (statSync as any).mockImplementation((path: string) => {
                if (created.has(path)) {
                    return {isDirectory: () => true};
                }

                throw new Error('ENOENT');
            });
            (mkdirSync as any).mockImplementation((path: string) => {
                created.add(path);
            });

            const generator: ModuleGenerator = new Map([
                ['barefile.ext', 'content'],
                [join('subdir', 'file.ext'), 'content'],
                [join('subdir', 'otherFile.ext'), 'content'],
                [
                    join('deeply', 'nested', 'sub', 'dir', 'otherFile.ext'),
                    'content'
                ],
                [join('subdir', 'anotherFile.ext'), 'content'],
            ]) as any;
            (generator as any).name = 'bar';

            importModule(generator);

            expect((mkdirSync as any).mock.calls).toEqual([
                [join(moduleRoot, 'subdir'), 0o755],
                [join(moduleRoot, 'deeply'), 0o755],
                [join(moduleRoot, 'deeply', 'nested'), 0o755],
                [join(moduleRoot, 'deeply', 'nested', 'sub'), 0o755],
                [join(moduleRoot, 'deeply', 'nested', 'sub', 'dir'), 0o755],
            ]);
        }
    );

    it(
        'should write all files yielded by the generator to a temporary directory',
        () => {
            importModule(generator);

            expect((writeFileSync as any).mock.calls)
                .toEqual([...generator].map(([filename, contents]) => [
                    join('foo', '01234', filename),
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
                join('foo', '01234'),
                join(dirname(dirname(__dirname)), name)
            ]);
        }
    );
});
