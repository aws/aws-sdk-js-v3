// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListServersCommand, ListServersCommandInput, ListServersCommandOutput } from "../commands/ListServersCommand";
import { MigrationHubStrategy } from "../MigrationHubStrategy";
import { MigrationHubStrategyClient } from "../MigrationHubStrategyClient";
import { MigrationHubStrategyPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MigrationHubStrategyClient,
  input: ListServersCommandInput,
  ...args: any
): Promise<ListServersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MigrationHubStrategy,
  input: ListServersCommandInput,
  ...args: any
): Promise<ListServersCommandOutput> => {
  // @ts-ignore
  return await client.listServers(input, ...args);
};
export async function* paginateListServers(
  config: MigrationHubStrategyPaginationConfiguration,
  input: ListServersCommandInput,
  ...additionalArguments: any
): Paginator<ListServersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof MigrationHubStrategy) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MigrationHubStrategyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MigrationHubStrategy | MigrationHubStrategyClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
