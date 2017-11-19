import {importModule} from "../importModule";
import {ClientModuleGenerator, ClientModuleInit} from '../ClientModuleGenerator';
import {fromModelJson} from '@aws/service-model';
import {readFileSync} from 'fs';
import * as yargs from "yargs";

export const CreateClientPackageCommand: yargs.CommandModule = {
    command: 'client',

    aliases: ['create-client'],

    describe: 'Create a client for the provided service model targeting the provided runtime.',

    builder: {
        model: {
            alias: ['m'],
            type: 'string',
            demandOption: true,
            coerce: modelPath => fromModelJson(readFileSync(modelPath, 'utf8')),
        },
        runtime: {
            alias: ['r'],
            type: 'string',
            choices: ['node', 'browser', 'universal'],
            demandOption: true,
        },
        version: {
            alias: ['v'],
            type: 'string'
        }
    } as yargs.CommandBuilder,

    handler(args: ClientModuleInit): void {
        importModule(new ClientModuleGenerator(args));
    }
};
