import {ModelModuleGenerator} from "./ModelModuleGenerator"
import {TreeModel, TreeModelStructure, TreeModelShape} from "@aws/build-types";
import {ServiceMetadata} from "@aws/types";
import {join, sep} from 'path';

const metadata: ServiceMetadata = {
    apiVersion: '2000-01-01',
    endpointPrefix: 'foo',
    protocol: 'json',
    serviceFullName: 'AWS Foo Service',
    signatureVersion: 'v4',
    uid: 'foo-2000-01-01'
};

const StringShape: TreeModelShape = {
    type: 'string',
    documentation: 'A string',
    name: 'StringShape'
};

const OperationInput: TreeModelStructure = {
    type: 'structure',
    name: 'OperationInput',
    documentation: 'input',
    required: ['member'],
    members: {member: {shape: StringShape}},
    topLevel: 'input'
};

const OperationOutput: TreeModelStructure = {
    type: 'structure',
    name: 'OperationOutput',
    documentation: 'output',
    required: [],
    members: {},
    topLevel: 'output',
};

const model: TreeModel = {
    name: 'Foo_Service',
    documentation: 'foo service',
    metadata,
    operations: {
        Operation: {
            name: 'Operation',
            documentation: 'operation',
            metadata,
            input: {shape: OperationInput},
            output: {shape: OperationOutput},
            errors: [],
            http: {
                requestUri: '/',
                method: 'POST'
            }
        }
    },
    shapes: {
        OperationInput,
        OperationOutput,
        StringShape,
    }
};

describe('ModelModuleGenerator', () => {
    it('should emit a model file for each structure and operation', () => {
        const expectedModels = new Set([
            join('model', 'Operation.ts'),
            join('model', 'OperationInput.ts'),
            join('model', 'OperationOutput.ts'),
        ]);

        for (const [filename, _] of new ModelModuleGenerator({model})) {
            expectedModels.delete(filename);
        }

        expect(expectedModels.size).toBe(0);
    });

    it('should emit a type file for each structure', () => {
        const expectedTypes = new Set([
            'OperationInput.ts',
            'OperationOutput.ts',
        ]);

        for (const [filename, _] of new ModelModuleGenerator({model})) {
            expectedTypes.delete(filename);
        }

        expect(expectedTypes.size).toBe(0);
    });

    it('should emit an index file with all types', () => {
        let found = false;
        for (const [filename, content] of new ModelModuleGenerator({model})) {
            if (filename === 'index.ts') {
                found = true;
                expect(content).toBe(
`export * from '.${sep}OperationInput.ts';
export * from '.${sep}OperationOutput.ts';`
                );
            }
        }

        expect(found).toBe(true);
    });

    it(
        'should derive the package name and description from the service metadata',
        () => {
            let assertionsMade = false;
            for (const [filename, content] of new ModelModuleGenerator({model})) {
                if (filename === 'package.json') {
                    assertionsMade = true;
                    const parsed = JSON.parse(content);

                    expect(parsed.name).toBe(`@aws/model-foo-service-v1`);
                    expect(parsed.description)
                        .toBe('Service model for AWS Foo Service');
                }
            }

            expect(assertionsMade).toBe(true);
        }
    );

    it('should derive the correct version identifier', () => {
        const v2Model = {
            ...model,
            metadata: {
                ...metadata,
                serviceFullName: 'Amazon DynamoDB',
                apiVersion: '2012-08-10'
            }
        };

        let assertionsMade = false;
        for (const [name, data] of new ModelModuleGenerator({model: v2Model})) {
            if (name === 'package.json') {
                assertionsMade = true;
                const parsed = JSON.parse(data);

                expect(parsed.name).toBe(`@aws/model-dynamodb-v2`);
                expect(parsed.description)
                    .toBe('Service model for Amazon DynamoDB');
            }
        }

        expect(assertionsMade).toBe(true);
    });

    it(
        'should allow the package version to be specified at construction',
        () => {
            let assertionsMade = false;
            const version = '1.0.0-alpha';
            for (const [filename, content] of new ModelModuleGenerator({model, version})) {
                if (filename === 'package.json') {
                    assertionsMade = true;
                    const parsed = JSON.parse(content);
                    expect(parsed.version).toBe(version);
                }
            }

            expect(assertionsMade).toBe(true);
        }
    );
});
