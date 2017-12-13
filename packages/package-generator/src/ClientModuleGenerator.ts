import { ModuleGenerator } from "./ModuleGenerator";
import {
    ConfigurationDefinition,
    CustomizationDefinition,
    RuntimeTarget,
    TreeModel,
    Import,
} from "@aws/build-types";
import {
    ClientGenerator,
    CommandGenerator,
    ModelGenerator,
    OperationGenerator,
    TypeGenerator,
} from "@aws/service-types-generator";
import {ServiceMetadata} from '@aws/types';
import {join, sep} from 'path';
import {intersects} from 'semver';

export interface ClientModuleInit {
    customizations?: Array<CustomizationDefinition>;
    model: TreeModel;
    runtime: RuntimeTarget;
    version?: string;
}

export class ClientModuleGenerator extends ModuleGenerator {
    private readonly clientGenerator: ClientGenerator;
    private readonly commandGenerator: CommandGenerator;
    private readonly model: TreeModel;
    private readonly target: RuntimeTarget;

    constructor({
        customizations,
        model,
        runtime,
        version = '0.0.1'
    }: ClientModuleInit) {
        let name = `sdk-${getServiceId(model.metadata)}`;
        const modelVersion = determineServiceVersion(model.metadata);
        if (modelVersion > 1) {
            name += `-v${modelVersion}`;
        }
        if (runtime !== 'universal') {
            name += `-${runtime}`;
        }

        super({
            name,
            description: `${runtime.substring(0, 1).toUpperCase()}${runtime.substring(1)} SDK for ${model.metadata.serviceFullName}`,
            version,
        });

        this.clientGenerator = new ClientGenerator(
            model,
            runtime,
            customizations
        );

        this.commandGenerator = new CommandGenerator(model, runtime);
        this.target = runtime;
        this.model = model;
    }

    *[Symbol.iterator](): IterableIterator<[string, string]> {
        yield* super[Symbol.iterator]();
        for (const [name, contents] of this.modelFiles()) {
            yield [join('model', `${name}.ts`), contents];
        }

        const packageIndexLines = [];
        for (const [name, contents] of new TypeGenerator(this.model, this.target)) {
            packageIndexLines.push(`export * from './types/${name}';`)
            yield [join('types', `${name}.ts`), contents];
        }

        for (const [name, contents] of this.clientGenerator) {
            packageIndexLines.push(`export * from './${name}';`)
            yield [`${name}.ts`, contents];
        }

        for (const [name, command] of this.commandGenerator) {
            packageIndexLines.push(`export * from './commands/${name}';`);
            yield [join('commands', `${name}.ts`), command];
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
        const {dependencies, devDependencies} = this;

        return {
            ...super.packageJson(),
            dependencies,
            devDependencies,
            scripts: {
                prepublishOnly: "tsc",
                pretest: "tsc",
                test: "exit 0"
            },
        };
    }

    protected tsconfig() {
        const {compilerOptions, ...rest} = super.tsconfig();
        if (
            compilerOptions.lib &&
            (this.target === 'browser' || this.target === 'universal')
        ) {
            compilerOptions.lib.push('dom');
        }

        return {
            ...rest,
            compilerOptions: {
                ...compilerOptions,
                rootDir: undefined,
                outDir: undefined,
            },
        };
    }

    protected testTsconfig() {
        return {'extends': './tsconfig.json'};
    }

    private get dependencies(): {[key: string]: string} {
        const dependencyDeclarations: {[key: string]: Set<string>} = {
            'tslib': new Set(['^1.8.0'])
        };

        for (const dependency of this.clientGenerator.dependencies) {
            const {package: packageName, version} = dependency;
            if (!(packageName in dependencyDeclarations)) {
                dependencyDeclarations[packageName] = new Set<string>();
            }
            dependencyDeclarations[packageName].add(version);
        }

        return Object.keys(dependencyDeclarations).reduce(
            (carry: {[key: string]: string}, value: string) => {
                const versionsRequied = [...dependencyDeclarations[value]];
                carry[value] = versionsRequied.reduce(
                    (carry: string, version: string) => {
                        if (!intersects(carry, version)) {
                            throw new Error(
                                `Invalid version used for package ${value}. ${version} is not compatible with ${carry}.`
                            );
                        }

                        return `${carry} ${version}`;
                    },
                    versionsRequied.pop() as string
                );

                return carry;
            },
            {}
        );
    }

    private get devDependencies(): {[key: string]: string} {
        const devDependencies: {[key: string]: string} = {
            'typescript': '^2.6'
        };

        if (this.target === 'node' || this.target === 'universal') {
            devDependencies['@types/node'] = '^8.0';
        }

        return devDependencies;
    }

    private *modelFiles() {
        yield* new ModelGenerator(this.model);
        yield* new OperationGenerator(this.model);
    }

    private *rootExports() {
        yield* new TypeGenerator(this.model, this.target);
        yield* this.clientGenerator;
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
