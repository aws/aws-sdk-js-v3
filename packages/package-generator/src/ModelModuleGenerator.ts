import {ModuleGenerator} from "./ModuleGenerator";
import {TreeModel} from "@aws/service-model";
import {
    ModelGenerator,
    OperationGenerator,
    TypeGenerator,
} from "@aws/service-types-generator";
import {ServiceMetadata} from '@aws/types';
import {join} from 'path';

export interface ModelModuleInit {
    model: TreeModel;
    version?: string;
}

export class ModelModuleGenerator extends ModuleGenerator {
    private readonly model: TreeModel;

    constructor({
        model,
        version = '0.0.1'
    }: ModelModuleInit) {
        super({
            // TODO use metadata.serviceId when added to the model
            name: `model-${getServiceId(model.metadata)}`,
            description: `Service model for ${model.metadata.serviceFullName}`,
            version,
        });
        this.model = model;
    }

    *[Symbol.iterator](): IterableIterator<[string, string]> {
        yield* super[Symbol.iterator]();
        for (const [name, contents] of new ModelGenerator(this.model)) {
            yield [join('model', `${name}.ts`), contents];
        }

        for (const [name, contents] of new OperationGenerator(this.model)) {
            yield [join('model', `${name}.ts`), contents];
        }

        for (const [name, contents] of new TypeGenerator(this.model)) {
            yield [`${name}.ts`, contents];
        }
    }

    protected gitignore() {
        return `
${super.gitignore()}
*.d.ts
*.js
*.js.map        
        `.trim();
    }

    protected npmignore() {
        return `
/coverage/
/docs/
*.ts
tsconfig.test.json
        `.trim();
    }

    protected packageJson() {
        return {
            ...super.packageJson(),
            dependencies: {
                '@aws/types': '^0.0.1'
            },
            devDependencies: {
                typescript: '^2.3'
            },
            scripts: {
                prepublishOnly: "tsc",
                pretest: "tsc",
                test: "exit 0"
            },
            main: undefined,
            types: undefined,
        };
    }

    protected tsconfig() {
        const {compilerOptions, ...rest} = super.tsconfig();
        return {
            ...rest,
            compilerOptions: {
                ...compilerOptions,
                lib: [
                    "es5",
                    "es2015.iterable"
                ],
                rootDir: undefined,
                outDir: undefined,
            },
        };
    }

    protected testTsconfig() {
        return {'extends': './tsconfig.json'};
    }
}

// TODO use metadata.serviceId when added to the model
function getServiceId(metadata: ServiceMetadata): string {
    return (metadata.serviceAbbreviation || metadata.serviceFullName)
        .toLowerCase()
        .replace(/^(aws|amazon)/, '')
        .replace(/(service|api|client)$/, '')
        .trim()
        .replace(/\s/g, '-');
}
