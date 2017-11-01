import {importModule} from "./importModule";
import {ModuleGenerator} from "./ModuleGenerator";
import {dirname, join} from 'path';

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
            expect((mkdirSync as any).mock.calls.length).toBe(1);
            expect((mkdirSync as any).mock.calls[0][0])
                .toMatch(/foo[\/\\][0-9a-f]{32}/);
        }
    );

    it(
        'should write all files yielded by the generator to a temporary directory',
        () => {
            importModule(generator);

            const {calls} = (writeFileSync as any).mock;
            const generatorOutput = [...generator];

            expect(calls.length).toBe(generatorOutput.length);
            for (let i = 0; i < generatorOutput.length; i++) {
                expect(calls[i][0]).toMatch(
                    new RegExp(`foo[\\/\\\\][0-9a-f]{32}[\\/\\\\]${generatorOutput[i][0].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")}`)
                );
                expect(calls[i][1]).toBe(generatorOutput[i][1]);
            }
        }
    );

    it(
        'should move the temporary directory into the repository as a package with the provided name',
        () => {
            importModule(generator);

            expect((renameSync as any).mock.calls.length).toBe(1);
            expect((renameSync as any).mock.calls[0].length).toBe(2);
            expect((renameSync as any).mock.calls[0][0])
                .toMatch(/foo[\/\\][0-9a-f]{32}/);
            expect((renameSync as any).mock.calls[0][1])
                .toBe(join(dirname(dirname(__dirname)), name));
        }
    );
});
