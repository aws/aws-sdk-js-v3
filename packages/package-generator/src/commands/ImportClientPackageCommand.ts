import { ClientModuleGenerator, ClientModuleInit } from '../ClientModuleGenerator';
import { clientModuleIdentifier } from '../clientModuleIdentifier';
import { importModule } from '../importModule';
import { fromModelJson, fromSmokeTestModelJson } from '@aws-sdk/service-model';
import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import * as yargs from "yargs";

export const ImportClientPackageCommand: yargs.CommandModule = {
    command: 'client',

    aliases: ['import-client'],

    describe: 'Create a client for the provided service model targeting the provided runtime. This package will be added to the AWS SDK for JavaScript repository if it is not already present.',

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
        smoke: {
            alias: ['s'],
            type: 'string',
            coerce: smokePath => fromSmokeTestModelJson(readFileSync(smokePath, 'utf8'))
        },
        version: {
            alias: ['v'],
            type: 'string',
        }
    } as yargs.CommandBuilder,

    handler(args: ClientModuleInit): void {
        if (!args.version) {
            try {
                args.version = JSON.parse(readFileSync(join(
                    dirname(dirname(dirname(__dirname))),
                    clientModuleIdentifier(args.model.metadata, args.runtime),
                    'package.json',
                )).toString()).version;
            } catch {
                args.version = '0.0.1';
            }
        }

        importModule(new ClientModuleGenerator({
            ...args,
            prefix: '@aws-sdk/'
        }));
    }
};
