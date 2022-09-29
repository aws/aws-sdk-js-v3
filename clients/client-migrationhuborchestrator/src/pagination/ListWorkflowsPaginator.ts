// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "../commands/ListWorkflowsCommand";
import { MigrationHubOrchestrator } from "../MigrationHubOrchestrator";
import { MigrationHubOrchestratorClient } from "../MigrationHubOrchestratorClient";
import { MigrationHubOrchestratorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MigrationHubOrchestratorClient,
  input: ListWorkflowsCommandInput,
  ...args: any
): Promise<ListWorkflowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkflowsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MigrationHubOrchestrator,
  input: ListWorkflowsCommandInput,
  ...args: any
): Promise<ListWorkflowsCommandOutput> => {
  // @ts-ignore
  return await client.listWorkflows(input, ...args);
};
export async function* paginateListWorkflows(
  config: MigrationHubOrchestratorPaginationConfiguration,
  input: ListWorkflowsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkflowsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkflowsCommandOutput;
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
