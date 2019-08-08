import { clientModuleIdentifier } from "../clientModuleIdentifier";
import { fromModelJson } from "@aws-sdk/service-model";
import { TreeModel, SmokeTestModel } from "@aws-sdk/build-types";
import { readFileSync } from "fs";
import { dirname } from "path";
import * as yargs from "yargs";
import { sync as globSync } from "glob";
import { ImportClientPackageCommand } from "./ImportClientPackageCommand";
import { loadSmokeTestModel } from "../loadSmokeTestModel";

interface ImportModelsCommandArgs {
  matching: string;
  ignore?: string | Array<string>;
  runtime?: string;
  version?: string;
}

interface ServicesMapValue {
  model: TreeModel;
  smoke?: SmokeTestModel;
}

export const ImportModelsCommand: yargs.CommandModule = {
  command: "import-all",

  aliases: ["import-models"],

  describe:
    "Create a client for all runtimes for all service models under the provided directory. The generated packages will be added to the AWS SDK for JavaScript repository if they are not already present. " +
    "Specified runtime or version is also supported",

  builder: {
    matching: {
      alias: ["m"],
      type: "string",
      demandOption: true
    },
    ignore: { type: "string" },
    runtime: {
      alias: ["r"],
      type: "string",
      choices: ["node", "browser", "universal"],
      default: undefined
    },
    version: {
      alias: ["v"],
      type: "string"
    }
  } as yargs.CommandBuilder,

  handler({
    ignore,
    matching,
    runtime,
    version
  }: ImportModelsCommandArgs): void {
    const services = new Map<string, ServicesMapValue>();
    for (const match of globSync(matching, { ignore })) {
      const model = fromModelJson(readFileSync(match, "utf8"));
      const smoke = loadSmokeTestModel(dirname(match));
      const clientId = clientModuleIdentifier(model.metadata);
      if (services.has(clientId)) {
        const currentApiVersion = services.get(clientId)!.model.metadata
          .apiVersion;
        if (model.metadata.apiVersion > currentApiVersion) {
          services.set(clientId, { model, smoke });
        }
      } else {
        services.set(clientModuleIdentifier(model.metadata), { model, smoke });
      }
    }

    console.log(`Generating ${services.size} SDK packages...`);
    for (const [identifier, { model, smoke }] of services) {
      console.log(
        `Generating ${runtime} ${clientModuleIdentifier(model.metadata)} SDK`
      );
      if (runtime) {
        ImportClientPackageCommand.handler({ model, runtime, smoke, version });
      } else {
        for (const runtime of ["node", "browser", "universal"]) {
          ImportClientPackageCommand.handler({
            model,
            runtime,
            smoke,
            version
          });
        }
      }
    }
  }
};
