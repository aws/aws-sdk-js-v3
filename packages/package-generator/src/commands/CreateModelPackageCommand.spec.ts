import {CreateModelPackageCommand} from "./CreateModelPackageCommand";

jest.mock('fs', () => ({readFileSync: jest.fn(() => '{"json":true}')}));
import {readFileSync} from 'fs';

jest.mock('@aws/service-model', () => ({
    fromModelJson: jest.fn(() => ({parsed: true}))
}));
import {fromModelJson} from '@aws/service-model';

jest.mock('../importModule', () => ({importModule: jest.fn()}));
import {importModule} from '../importModule';

jest.mock('../ModelModuleGenerator', () => {
    return {ModelModuleGenerator: jest.fn(() => ({}))};
});
import {ModelModuleGenerator} from '../ModelModuleGenerator';

describe('CreateModelPackageCommand', () => {
    beforeEach(() => {
        (readFileSync as any).mockClear();
        (fromModelJson as any).mockClear();
        (ModelModuleGenerator as any).mockClear();
        (importModule as any).mockClear();
    });

    describe('.builder', () => {
        it('should convert a path to a model file into a parsed model', () => {
            expect(CreateModelPackageCommand.builder).toBeDefined();
            expect((CreateModelPackageCommand.builder as any).model)
                .toBeDefined();
            expect((CreateModelPackageCommand.builder as any).model.coerce)
                .toBeDefined();
            expect((CreateModelPackageCommand.builder as any).model.coerce('path'))
                .toEqual({parsed: true});


            expect((readFileSync as any).mock.calls.length).toBe(1);
            expect((fromModelJson as any).mock.calls).toEqual([
                ['{"json":true}'],
            ]);
        });
    });

    describe('.handler', () => {
        it(
            'should read the specified model file and pass the parsed service model to the ModelModuleGenerator ',
            () => {
                const args = {model: {parsed: true}};

                CreateModelPackageCommand.handler(args);

                expect((ModelModuleGenerator as any).mock.calls).toEqual([
                    [args],
                ]);
                expect((importModule as any).mock.calls.length).toBe(1);
            }
        )
    });
});
