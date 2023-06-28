// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListNetworksCommand,
  ListNetworksCommandInput,
  ListNetworksCommandOutput,
} from "../commands/ListNetworksCommand";
import { PrivateNetworksClient } from "../PrivateNetworksClient";
import { PrivateNetworksPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PrivateNetworksClient,
  input: ListNetworksCommandInput,
  ...args: any
): Promise<ListNetworksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNetworksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListNetworks(
  config: PrivateNetworksPaginationConfiguration,
  input: ListNetworksCommandInput,
  ...additionalArguments: any
): Paginator<ListNetworksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.startToken
  let token: typeof input.startToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNetworksCommandOutput;
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
