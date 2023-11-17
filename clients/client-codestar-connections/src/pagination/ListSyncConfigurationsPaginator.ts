// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeStarConnectionsClient } from "../CodeStarConnectionsClient";
import {
  ListSyncConfigurationsCommand,
  ListSyncConfigurationsCommandInput,
  ListSyncConfigurationsCommandOutput,
} from "../commands/ListSyncConfigurationsCommand";
import { CodeStarConnectionsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeStarConnectionsClient,
  input: ListSyncConfigurationsCommandInput,
  ...args: any
): Promise<ListSyncConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSyncConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSyncConfigurations(
  config: CodeStarConnectionsPaginationConfiguration,
  input: ListSyncConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSyncConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSyncConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodeStarConnectionsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeStarConnections | CodeStarConnectionsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
