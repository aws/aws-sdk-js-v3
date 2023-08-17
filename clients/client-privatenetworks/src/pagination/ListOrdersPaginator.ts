// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListOrdersCommand, ListOrdersCommandInput, ListOrdersCommandOutput } from "../commands/ListOrdersCommand";
import { PrivateNetworksClient } from "../PrivateNetworksClient";
import { PrivateNetworksPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PrivateNetworksClient,
  input: ListOrdersCommandInput,
  ...args: any
): Promise<ListOrdersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrdersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListOrders(
  config: PrivateNetworksPaginationConfiguration,
  input: ListOrdersCommandInput,
  ...additionalArguments: any
): Paginator<ListOrdersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.startToken
  let token: typeof input.startToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOrdersCommandOutput;
  while (hasNext) {
    input.startToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof PrivateNetworksClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PrivateNetworks | PrivateNetworksClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
