// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeStarConnections } from "../CodeStarConnections";
import { CodeStarConnectionsClient } from "../CodeStarConnectionsClient";
import { ListHostsCommand, ListHostsCommandInput, ListHostsCommandOutput } from "../commands/ListHostsCommand";
import { CodeStarConnectionsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeStarConnectionsClient,
  input: ListHostsCommandInput,
  ...args: any
): Promise<ListHostsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHostsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeStarConnections,
  input: ListHostsCommandInput,
  ...args: any
): Promise<ListHostsCommandOutput> => {
  // @ts-ignore
  return await client.listHosts(input, ...args);
};
export async function* paginateListHosts(
  config: CodeStarConnectionsPaginationConfiguration,
  input: ListHostsCommandInput,
  ...additionalArguments: any
): Paginator<ListHostsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHostsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodeStarConnections) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeStarConnectionsClient) {
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
