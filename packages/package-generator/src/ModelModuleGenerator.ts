import {ModuleGenerator} from "./ModuleGenerator";
import {TreeModel} from "@aws/build-types";
import {
    ModelGenerator,
    OperationGenerator,
    TypeGenerator,
} from "@aws/service-types-generator";
import {ServiceMetadata} from '@aws/types';
import {join, sep} from 'path';

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
            // TODO use metadata.serviceId and metadata.major_version when added to the model
            name: `model-${getServiceId(model.metadata)}-v${determineServiceVersion(model.metadata)}`,
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

        const packageIndexLines = [];
        for (const [name, contents] of new TypeGenerator(this.model)) {
            const basename = `${name}.ts`;
            packageIndexLines.push(`export * from '.${sep}${basename}';`)
            yield [basename, contents];
        }

        yield ['index.ts', packageIndexLines.join('\n')];
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

function getServiceId(metadata: ServiceMetadata): string {
    const {
        serviceAbbreviation,
        serviceFullName,
        serviceId,
    } = metadata;

    const className = serviceId || (
        (serviceAbbreviation || serviceFullName)
            .replace(/^(aws|amazon)/i, '')
            .trim()
    );

    return className
        .toLowerCase()
        .replace(/\s/g, '-');
}

// TODO use metadata.major_version when added to the model
function determineServiceVersion(metadata: ServiceMetadata): number {
    const serviceId = getServiceId(metadata);
    if (
        serviceMajorVersions[serviceId] &&
        serviceMajorVersions[serviceId][metadata.apiVersion]
    ) {
        return serviceMajorVersions[serviceId][metadata.apiVersion];
    }

    return 1;
}

interface MajorVersionMatcher {
    [serviceIdentifier: string]: {
        [apiVersion: string]: number;
    }
}
const serviceMajorVersions: MajorVersionMatcher = {
    dynamodb: {
        '2012-08-10': 2,
    },
};
