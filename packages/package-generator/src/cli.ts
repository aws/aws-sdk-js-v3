import {CreateCustomPackageCommand} from './commands';

require('yargs')
    .command(CreateCustomPackageCommand)
    .demandCommand()
    .help()
    .argv;
