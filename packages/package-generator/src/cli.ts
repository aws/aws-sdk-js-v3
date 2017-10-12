import {
    CreateCustomPackageCommand,
    CreateModelPackageCommand,
} from './commands';

require('yargs')
    .command(CreateCustomPackageCommand)
    .command(CreateModelPackageCommand)
    .demandCommand()
    .help()
    .argv;
