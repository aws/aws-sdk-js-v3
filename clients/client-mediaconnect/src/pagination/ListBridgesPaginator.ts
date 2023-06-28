// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListBridgesCommand, ListBridgesCommandInput, ListBridgesCommandOutput } from "../commands/ListBridgesCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MediaConnectClient,
  input: ListBridgesCommandInput,
  ...args: any
): Promise<ListBridgesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBridgesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBridges(
  config: MediaConnectPaginationConfiguration,
  input: ListBridgesCommandInput,
  ...additionalArguments: any
): Paginator<ListBridgesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBridgesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaConnect | MediaConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
