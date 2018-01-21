import {
    CreateClientPackageCommand,
    CreateCustomPackageCommand,
} from './commands';

require('yargs')
    .command(CreateCustomPackageCommand)
    .command(CreateClientPackageCommand)
    .demandCommand()
    .help()
    .argv;
