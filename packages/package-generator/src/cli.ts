import {
    ImportClientPackageCommand,
    CreateCustomPackageCommand,
} from './commands';

require('yargs')
    .command(CreateCustomPackageCommand)
    .command(ImportClientPackageCommand)
    .demandCommand()
    .help()
    .argv;
