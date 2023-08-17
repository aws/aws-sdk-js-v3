// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTemplateStepsCommand,
  ListTemplateStepsCommandInput,
  ListTemplateStepsCommandOutput,
} from "../commands/ListTemplateStepsCommand";
import { MigrationHubOrchestratorClient } from "../MigrationHubOrchestratorClient";
import { MigrationHubOrchestratorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
