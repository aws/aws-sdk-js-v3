import {
    APACHE_2_LICENSE,
    DEFAULT_GITIGNORE,
    DEFAULT_NPMIGNORE,
    DEFAULT_TEST_TSCONFIG,
    DEFAULT_TSCONFIG,
    JsonDocument,
} from './constants';

export interface CustomModuleInit {
    name: string;
    description?: string;
    version?: string;
}

export class ModuleGenerator {
    readonly name: string;
    readonly description?: string;
    readonly version: string;

    constructor({
        name,
        description,
        version = "0.0.1"
    }: CustomModuleInit) {
        this.name = name;
        this.description = description;
        this.version = version;
    }

    *[Symbol.iterator](): IterableIterator<[string, string]> {
        yield ['.gitignore', this.gitignore()];
        yield ['.npmignore', this.npmignore()];
        yield ['package.json', JSON.stringify(this.packageJson(), null, 4)];
        yield ['README.md', this.readme()];
        yield ['LICENSE', APACHE_2_LICENSE];
        yield ['tsconfig.json', JSON.stringify(this.tsconfig(), null, 4)];
        yield ['tsconfig.test.json', JSON.stringify(this.testTsconfig(), null, 4)];
    }

    protected gitignore(): string {
        return DEFAULT_GITIGNORE;
    }

    protected npmignore(): string {
        return DEFAULT_NPMIGNORE;
    }

    protected packageJson(): JsonDocument {
        return {
            name: `@aws/${this.name}`,
            description: this.description,
            version: this.version,
            scripts: {
                prepublishOnly: "tsc",
                pretest: "tsc -p tsconfig.test.json",
                test: "jest"
            },
            main: "./build/index.js",
            types: "./build/index.d.ts",
            author: {
                name: "AWS SDK for JavaScript Team",
                email: "aws-sdk-js@amazon.com",
                url: "https://aws.amazon.com/javascript/"
            },
            license: "Apache-2.0",
            dependencies: {
                tslib: "^1.8.0"
            },
            devDependencies: {
                "@types/jest": "^20.0.2",
                typescript: "^2.3",
                jest: "^20.0.4"
            }
        };
    }

    protected readme(): string {
        return `
# ${this.name}

${this.description || ''}
        `.trim();
    }

    protected testTsconfig(): {[key: string]: any} {
        return DEFAULT_TEST_TSCONFIG;
    }

    protected tsconfig(): {[key: string]: any} {
        return DEFAULT_TSCONFIG;
    }
}
