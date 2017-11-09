import {importModule} from "../importModule";
import {ModelModuleGenerator, ModelModuleInit} from '../ModelModuleGenerator';
import {fromModelJson} from '@aws/service-model';
import {readFileSync} from 'fs';
import * as yargs from "yargs";

export const CreateModelPackageCommand: yargs.CommandModule = {
    command: 'model',

    aliases: ['import-model'],

    describe: 'Create a new custom package with the provided name and'
    + ' description. Includes default NPM, git, and TypeScript'
    + ' configuration files for an SDK package written in TypeScript and'
    + ' tested with Jest.',

    builder: {
        model: {
            alias: ['m'],
            type: 'string',
            demandOption: true,
            coerce: modelPath => fromModelJson(readFileSync(modelPath, 'utf8')),
        }
    } as yargs.CommandBuilder,

    handler(args: ModelModuleInit): void {
        importModule(new ModelModuleGenerator(args));
    }
};
