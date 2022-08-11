// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDeviceIdentifiersCommand,
  ListDeviceIdentifiersCommandInput,
  ListDeviceIdentifiersCommandOutput,
} from "../commands/ListDeviceIdentifiersCommand";
import { PrivateNetworks } from "../PrivateNetworks";
import { PrivateNetworksClient } from "../PrivateNetworksClient";
import { PrivateNetworksPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PrivateNetworksClient,
  input: ListDeviceIdentifiersCommandInput,
  ...args: any
): Promise<ListDeviceIdentifiersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeviceIdentifiersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: PrivateNetworks,
  input: ListDeviceIdentifiersCommandInput,
  ...args: any
): Promise<ListDeviceIdentifiersCommandOutput> => {
  // @ts-ignore
  return await client.listDeviceIdentifiers(input, ...args);
};
export async function* paginateListDeviceIdentifiers(
  config: PrivateNetworksPaginationConfiguration,
  input: ListDeviceIdentifiersCommandInput,
  ...additionalArguments: any
): Paginator<ListDeviceIdentifiersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.startToken
  let token: typeof input.startToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeviceIdentifiersCommandOutput;
  while (hasNext) {
    input.startToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof PrivateNetworks) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PrivateNetworksClient) {
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
