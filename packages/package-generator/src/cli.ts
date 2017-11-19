import {
    CreateClientPackageCommand,
    CreateCustomPackageCommand,
    CreateModelPackageCommand,
} from './commands';

require('yargs')
    .command(CreateCustomPackageCommand)
    .command(CreateClientPackageCommand)
    .command(CreateModelPackageCommand)
    .demandCommand()
    .help()
    .argv;
