import {
  CreateCustomPackageCommand,
  ImportClientPackageCommand,
  ImportModelsCommand
} from "./commands";

require("yargs")
  .command(CreateCustomPackageCommand)
  .command(ImportClientPackageCommand)
  .command(ImportModelsCommand)
  .demandCommand()
  .help().argv;
