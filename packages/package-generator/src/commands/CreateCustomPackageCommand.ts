import {importModule} from "../importModule";
import {CustomModuleInit, ModuleGenerator} from '../ModuleGenerator';
import * as yargs from "yargs";

export const CreateCustomPackageCommand: yargs.CommandModule = {
    command: 'custom',

    aliases: ['new'],

    describe: 'Create a new custom package with the provided name and'
        + ' description. Includes default NPM, git, and TypeScript'
        + ' configuration files for an SDK package written in TypeScript and'
        + ' tested with Jest.',

    builder: {
        name: {
            alias: ['n'],
            type: 'string',
            demandOption: true,
            coerce: name => `@aws-sdk/${name.replace(/^@aws-sdk\//, '')}`
        },
        description: {
            alias: ['d'],
            type: 'string'
        },
        version: {
            alias: ['v'],
            type: 'string'
        }
    } as {[key: string]: yargs.Options},

    handler(args: CustomModuleInit): void {
        importModule(new ModuleGenerator(args));
    }
};
