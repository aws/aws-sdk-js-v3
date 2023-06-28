// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWorkflowStepGroupsCommand,
  ListWorkflowStepGroupsCommandInput,
  ListWorkflowStepGroupsCommandOutput,
} from "../commands/ListWorkflowStepGroupsCommand";
import { MigrationHubOrchestratorClient } from "../MigrationHubOrchestratorClient";
import { MigrationHubOrchestratorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MigrationHubOrchestratorClient,
  input: ListWorkflowStepGroupsCommandInput,
  ...args: any
): Promise<ListWorkflowStepGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkflowStepGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWorkflowStepGroups(
  config: MigrationHubOrchestratorPaginationConfiguration,
  input: ListWorkflowStepGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkflowStepGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkflowStepGroupsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof MigrationHubOrchestratorClient) {
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
