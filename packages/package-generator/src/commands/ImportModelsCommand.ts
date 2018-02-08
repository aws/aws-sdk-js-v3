import { clientModuleIdentifier } from '../clientModuleIdentifier';
import { fromModelJson } from '@aws/service-model';
import { TreeModel } from '@aws/build-types';
import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import * as yargs from 'yargs';
import { sync as globSync } from 'glob';
import { ImportClientPackageCommand } from './ImportClientPackageCommand';

interface ImportModelsCommandArgs {
    matching: string;
    ignore?: string|Array<string>;
}

export const ImportModelsCommand: yargs.CommandModule = {
    command: 'import-all',

    aliases: ['import-models'],

    describe: 'Create a client for the provided service model targeting the provided runtime. This package will be added to the AWS SDK for JavaScript repository if it is not already present.',

    builder: {
        matching: {
            alias: ['m'],
            type: 'string',
            demandOption: true,
        },
        ignore: { type: 'string' }
    } as yargs.CommandBuilder,

    handler({ignore, matching}: ImportModelsCommandArgs): void {
        const services = new Map<string, TreeModel>();
        for (const match of globSync(matching, {ignore})) {
            const model = fromModelJson(readFileSync(match, 'utf8'));
            services.set(clientModuleIdentifier(model.metadata), model);
        }

        console.log(`Generating ${services.size} SDK packages...`);

        for (const [identifier, model] of services) {
            for (const runtime of ['node', 'browser', 'universal']) {
                console.log(`Generating ${runtime} ${clientModuleIdentifier(model.metadata)} SDK`);
                ImportClientPackageCommand.handler({ model, runtime });
            }
        }
    }
};
