import { clientModuleIdentifier } from '../clientModuleIdentifier';
import { fromModelJson, fromSmokeTestModelJson } from '@aws/service-model';
import { TreeModel, SmokeTestModel } from '@aws/build-types';
import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import * as yargs from 'yargs';
import { sync as globSync } from 'glob';
import { ImportClientPackageCommand } from './ImportClientPackageCommand';
import {loadSmokeTestModel} from '../loadSmokeTestModel';

interface ImportModelsCommandArgs {
    matching: string;
    ignore?: string|Array<string>;
}

interface ServicesMapValue {
    model: TreeModel;
    smoke?: SmokeTestModel;
}

export const ImportModelsCommand: yargs.CommandModule = {
    command: 'import-all',

    aliases: ['import-models'],

    describe: 'Create a client for all runtimes for all service models under the provided directory. The generated packages will be added to the AWS SDK for JavaScript repository if they are not already present.',

    builder: {
        matching: {
            alias: ['m'],
            type: 'string',
            demandOption: true,
        },
        ignore: { type: 'string' }
    } as yargs.CommandBuilder,

    handler({ignore, matching}: ImportModelsCommandArgs): void {
        const services = new Map<string, ServicesMapValue>();
        for (const match of globSync(matching, {ignore})) {
            const model = fromModelJson(readFileSync(match, 'utf8'));
            const smoke = loadSmokeTestModel(dirname(match));
            services.set(clientModuleIdentifier(model.metadata), {model, smoke});
        }

        console.log(`Generating ${services.size} SDK packages...`);

        for (const [identifier, {model, smoke}] of services) {
            for (const runtime of ['node', 'browser', 'universal']) {
                console.log(`Generating ${runtime} ${clientModuleIdentifier(model.metadata)} SDK`);
                ImportClientPackageCommand.handler({ model, runtime, smoke });
            }
        }
    }
};
