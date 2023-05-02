// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListNetworkResourcesCommand,
  ListNetworkResourcesCommandInput,
  ListNetworkResourcesCommandOutput,
} from "../commands/ListNetworkResourcesCommand";
import { PrivateNetworksClient } from "../PrivateNetworksClient";
import { PrivateNetworksPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PrivateNetworksClient,
  input: ListNetworkResourcesCommandInput,
  ...args: any
): Promise<ListNetworkResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNetworkResourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListNetworkResources(
  config: PrivateNetworksPaginationConfiguration,
  input: ListNetworkResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListNetworkResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.startToken
  let token: typeof input.startToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNetworkResourcesCommandOutput;
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
