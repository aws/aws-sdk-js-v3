import * as prettier from "prettier";
import { clientModuleIdentifier } from "./clientModuleIdentifier";
import { ModuleGenerator } from "./ModuleGenerator";
import {
  ConfigurationDefinition,
  CustomizationDefinition,
  Import,
  RuntimeTarget,
  TreeModel,
  SmokeTestModel
} from "@aws-sdk/build-types";
import {
  CircularDependenciesMap,
  ClientGenerator,
  CommandGenerator,
  detectCircularModelDependency,
  ModelGenerator,
  OperationGenerator,
  SmokeTestGenerator,
  TypeGenerator,
  readme,
  ReadmeInterface
} from "@aws-sdk/service-types-generator";
import { join, sep } from "path";
import { intersects } from "semver";

export interface ClientModuleInit {
  customizations?: Array<CustomizationDefinition>;
  model: TreeModel;
  runtime: RuntimeTarget;
  prefix?: string;
  smoke?: SmokeTestModel;
  version?: string;
  dest?: string;
}

export class ClientModuleGenerator extends ModuleGenerator {
  private readonly clientGenerator: ClientGenerator;
  private readonly commandGenerator: CommandGenerator;
  private readonly smokeTestGenerator?: SmokeTestGenerator;
  private readonly model: TreeModel;
  private readonly circularDependencies?: CircularDependenciesMap;
  private readonly target: RuntimeTarget;

  constructor({
    customizations,
    model,
    prefix = "",
    runtime,
    smoke,
    version = "0.1.0"
  }: ClientModuleInit) {
    const packageName = `${prefix}${clientModuleIdentifier(
      model.metadata,
      runtime
    )}`;
    super({
      name: packageName,
      description: `${runtime.substring(0, 1).toUpperCase()}${runtime.substring(
        1
      )} SDK for ${model.metadata.serviceFullName}`,
      version
    });

    this.clientGenerator = new ClientGenerator(model, runtime, customizations);

    if (smoke) {
      this.smokeTestGenerator = new SmokeTestGenerator({
        clientName: this.clientGenerator.clientName,
        model: smoke,
        packageName,
        runtime,
        serviceModel: model
      });
    }

    this.commandGenerator = new CommandGenerator(model, runtime);
    this.target = runtime;
    this.model = model;

    const circularDependencies = detectCircularModelDependency(model);
    if (Object.keys(circularDependencies).length > 0) {
      this.circularDependencies = circularDependencies;
    }
  }

  *[Symbol.iterator](): IterableIterator<[string, string]> {
    yield* super[Symbol.iterator]();
    for (const [name, contents] of this.modelFiles()) {
      if (name === "ServiceMetadata") {
        yield [
          join("model", `${name}.ts`),
          prettier.format(contents, { parser: "typescript" })
        ];
      } else {
        yield [
          join("model", "shapes", `${name}.ts`),
          prettier.format(contents, { parser: "typescript" })
        ];
      }
    }

    for (const [name, contents] of new OperationGenerator(this.model)) {
      yield [
        join("model", "operations", `${name}.ts`),
        prettier.format(contents, { parser: "typescript" })
      ];
    }

    const packageIndexLines = [];
    for (const [name, contents] of new TypeGenerator(this.model, this.target)) {
      packageIndexLines.push(`export * from "./types/${name}";`);
      yield [
        join("types", `${name}.ts`),
        prettier.format(contents, { parser: "typescript" })
      ];
    }

    for (const [name, contents] of this.clientGenerator) {
      packageIndexLines.push(`export * from "./${name}";`);
      yield [`${name}.ts`, prettier.format(contents, { parser: "typescript" })];
    }

    for (const [name, command] of this.commandGenerator) {
      packageIndexLines.push(`export * from "./commands/${name}";`);
      yield [
        join("commands", `${name}.ts`),
        prettier.format(command, { parser: "typescript" })
      ];
    }

    yield [
      "index.ts",
      prettier.format(packageIndexLines.join("\n"), { parser: "typescript" })
    ];

    yield [
      "README.md",
      prettier.format(
        readme({
          model: this.model,
          name: this.name,
          runtime: this.target
        }),
        { parser: "markdown" }
      )
    ];

    if (this.smokeTestGenerator) {
      for (const [name, contents] of this.smokeTestGenerator) {
        yield [name, contents];
      }
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
!*.d.ts
tsconfig.test.json
        `.trim();
  }

  protected packageJson() {
    const parentPackageJson = super.packageJson();

    return {
      ...parentPackageJson,
      main: "./index.js",
      types: "./index.d.ts",
      dependencies: this.dependencies(parentPackageJson.dependencies),
      devDependencies: this.devDependencies(),
      scripts: {
        clean:
          "npm run remove-definitions && npm run remove-maps && npm run remove-js",
        "build-documentation": "npm run clean && typedoc ./",
        prepublishOnly: "tsc",
        pretest: "tsc",
        "remove-definitions":
          "rimraf *.d.ts && rimraf ./commands/*.d.ts && rimraf ./model/*.d.ts rimraf ./types/*.d.ts",
        "remove-documentation": "rimraf ./docs",
        "remove-js":
          "rimraf *.js && rimraf ./commands/*.js && rimraf ./model/*.js && rimraf ./types/*.js",
        "remove-maps":
          "rimraf *.js.map && rimraf ./commands/*.js.map && rimraf ./model/*.js.map && rimraf ./types/*.js.map",
        test: "exit 0",
        "smoke-test": this.smokeTestCommand()
      }
    };
  }

  protected tsconfig() {
    let { compilerOptions, ...rest } = super.tsconfig();
    if (
      compilerOptions.lib &&
      (this.target === "browser" || this.target === "universal")
    ) {
      compilerOptions = {
        ...compilerOptions,
        lib: [...compilerOptions.lib, "dom"]
      };
    }

    const typedocOptions = {
      exclude: "**/node_modules/**",
      excludedNotExported: true,
      excludePrivate: true,
      hideGenerator: true,
      ignoreCompilerErrors: true,
      mode: "file",
      out: "./docs",
      plugin: "@aws-sdk/client-documentation-generator"
    };

    return {
      ...rest,
      compilerOptions: {
        ...compilerOptions,
        rootDir: undefined,
        outDir: undefined
      },
      typedocOptions
    };
  }

  protected testTsconfig() {
    return { extends: "./tsconfig.json" };
  }

  private dependencies(inherited: ObjStrMap): ObjStrMap {
    const dependencyDeclarations: { [key: string]: Set<string> } = {};

    for (const pkg of Object.keys(inherited)) {
      dependencyDeclarations[pkg] = new Set<string>();
      dependencyDeclarations[pkg].add(inherited[pkg]);
    }

    for (const dependency of this.clientGenerator.dependencies) {
      const { package: packageName, version } = dependency;
      if (!(packageName in dependencyDeclarations)) {
        dependencyDeclarations[packageName] = new Set<string>();
      }
      dependencyDeclarations[packageName].add(version);
    }

    for (const dependency of this.commandGenerator.dependencies) {
      const { package: packageName, version } = dependency;
      if (!(packageName in dependencyDeclarations)) {
        dependencyDeclarations[packageName] = new Set<string>();
      }
      dependencyDeclarations[packageName].add(version);
    }

    return Object.keys(dependencyDeclarations)
      .sort()
      .reduce((carry: { [key: string]: string }, value: string) => {
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
      }, {});
  }

  private devDependencies(): { [key: string]: string } {
    const devDependencies: { [key: string]: string } = {
      "@aws-sdk/client-documentation-generator": "^0.1.0-preview.2",
      rimraf: "^2.6.2",
      typedoc: "^0.14.2",
      typescript: "~3.4.0"
    };

    if (this.target === "node" || this.target === "universal") {
      devDependencies["@types/node"] = "^10.0.0";
    }

    if (this.smokeTestGenerator) {
      const testDependencies = this.smokeTestGenerator.devDependencies;
      for (const packageName of Object.keys(testDependencies)) {
        devDependencies[packageName] = testDependencies[packageName];
      }
    }

    return Object.keys(devDependencies)
      .sort()
      .reduce((carry: { [key: string]: string }, value: string) => {
        carry[value] = devDependencies[value];
        return carry;
      }, {}); //sort the dependencies;
  }

  private smokeTestCommand(): string {
    if (!this.smokeTestCommand) {
      return "exit 0";
    }

    switch (this.target) {
      case "browser":
        return "karma start karma.conf";
      case "node":
        return "npm run pretest && node ./test/smoke/index.spec.js";
      case "universal":
        return "tsc && node test/smoke/node.spec.js && karma start karma.conf";
      default:
        return "exit 0";
    }
  }

  private *modelFiles() {
    for (let [file, generated] of new ModelGenerator(
      this.model,
      this.circularDependencies
    )) {
      if (file === "ServiceMetadata") {
        generated += `\nexport const clientVersion: string = "${this.version}";`;
      }
      yield [file, generated];
    }
  }

  private *rootExports() {
    yield* new TypeGenerator(this.model, this.target);
    yield* this.clientGenerator;
  }
}

type ObjStrMap = { [key: string]: string };
