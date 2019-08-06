import * as prettier from "prettier";
import {
  APACHE_2_LICENSE,
  DEFAULT_GITIGNORE,
  DEFAULT_NPMIGNORE,
  DEFAULT_TEST_TSCONFIG,
  DEFAULT_TSCONFIG,
  JsonDocument
} from "./constants";
import { join, dirname } from "path";
import { readFileSync } from "fs";

export interface CustomModuleInit {
  name: string;
  description?: string;
  version?: string;
}

export class ModuleGenerator {
  readonly name: string;
  readonly description?: string;
  readonly version: string;

  constructor({ name, description, version = "0.1.0" }: CustomModuleInit) {
    this.name = name;
    this.description = description;
    this.version = version;
  }

  *[Symbol.iterator](): IterableIterator<[string, string]> {
    yield [".gitignore", this.gitignore()];
    yield [".npmignore", this.npmignore()];
    yield [
      "package.json",
      prettier.format(JSON.stringify(this.packageJson(), null, 2), {
        parser: "json"
      })
    ];
    yield ["README.md", prettier.format(this.readme(), { parser: "markdown" })];
    yield ["LICENSE", APACHE_2_LICENSE];
    yield [
      "tsconfig.json",
      prettier.format(JSON.stringify(this.tsconfig(), null, 2), {
        parser: "json"
      })
    ];
    yield [
      "tsconfig.test.json",
      prettier.format(JSON.stringify(this.testTsconfig(), null, 2), {
        parser: "json"
      })
    ];
    const changelog = this.changelog();
    if (changelog) yield ["CHANGELOG.md", changelog];
  }

  protected gitignore(): string {
    return DEFAULT_GITIGNORE;
  }

  protected npmignore(): string {
    return DEFAULT_NPMIGNORE;
  }

  protected packageJson(): JsonDocument {
    return {
      name: this.name,
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
        email: "",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      dependencies: {
        tslib: "^1.8.0"
      },
      devDependencies: {
        "@types/jest": "^24.0.12",
        typescript: "~3.4.0",
        jest: "^24.7.1"
      }
    };
  }

  protected readme(): string {
    return `
# @aws-sdk/${this.name}

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/${
      this.name
    }/preview.svg)](https://www.npmjs.com/package/@aws-sdk/${this.name})
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/${
      this.name
    }.svg)](https://www.npmjs.com/package/@aws-sdk/${this.name})

${this.description || ""}
        `.trim();
  }

  protected testTsconfig(): { [key: string]: any } {
    return DEFAULT_TEST_TSCONFIG;
  }

  protected tsconfig(): { [key: string]: any } {
    return DEFAULT_TSCONFIG;
  }

  protected changelog(): string | undefined {
    const previousChangelog = join(
      dirname(dirname(__dirname)),
      this.name.replace(/^@aws-sdk\//, ""),
      "CHANGELOG.md"
    );
    try {
      return readFileSync(previousChangelog).toString();
    } catch (e) {
      return undefined;
    }
  }
}
