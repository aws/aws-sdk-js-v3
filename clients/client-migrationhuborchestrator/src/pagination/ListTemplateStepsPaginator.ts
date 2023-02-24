// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTemplateStepsCommand,
  ListTemplateStepsCommandInput,
  ListTemplateStepsCommandOutput,
} from "../commands/ListTemplateStepsCommand";
import { MigrationHubOrchestrator } from "../MigrationHubOrchestrator";
import { MigrationHubOrchestratorClient } from "../MigrationHubOrchestratorClient";
import { MigrationHubOrchestratorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MigrationHubOrchestratorClient,
  input: ListTemplateStepsCommandInput,
  ...args: any
): Promise<ListTemplateStepsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTemplateStepsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MigrationHubOrchestrator,
  input: ListTemplateStepsCommandInput,
  ...args: any
): Promise<ListTemplateStepsCommandOutput> => {
  // @ts-ignore
  return await client.listTemplateSteps(input, ...args);
};
export async function* paginateListTemplateSteps(
  config: MigrationHubOrchestratorPaginationConfiguration,
  input: ListTemplateStepsCommandInput,
  ...additionalArguments: any
): Paginator<ListTemplateStepsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTemplateStepsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof MigrationHubOrchestrator) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MigrationHubOrchestratorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MigrationHubOrchestrator | MigrationHubOrchestratorClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
