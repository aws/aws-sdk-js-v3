// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "../commands/ListTemplatesCommand";
import { MigrationHubOrchestrator } from "../MigrationHubOrchestrator";
import { MigrationHubOrchestratorClient } from "../MigrationHubOrchestratorClient";
import { MigrationHubOrchestratorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MigrationHubOrchestratorClient,
  input: ListTemplatesCommandInput,
  ...args: any
): Promise<ListTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MigrationHubOrchestrator,
  input: ListTemplatesCommandInput,
  ...args: any
): Promise<ListTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listTemplates(input, ...args);
};
export async function* paginateListTemplates(
  config: MigrationHubOrchestratorPaginationConfiguration,
  input: ListTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTemplatesCommandOutput;
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
