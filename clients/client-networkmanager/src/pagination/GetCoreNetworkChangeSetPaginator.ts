// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetCoreNetworkChangeSetCommand,
  GetCoreNetworkChangeSetCommandInput,
  GetCoreNetworkChangeSetCommandOutput,
} from "../commands/GetCoreNetworkChangeSetCommand";
import { NetworkManager } from "../NetworkManager";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetCoreNetworkChangeSetCommandInput,
  ...args: any
): Promise<GetCoreNetworkChangeSetCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCoreNetworkChangeSetCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: NetworkManager,
  input: GetCoreNetworkChangeSetCommandInput,
  ...args: any
): Promise<GetCoreNetworkChangeSetCommandOutput> => {
  // @ts-ignore
  return await client.getCoreNetworkChangeSet(input, ...args);
};
export async function* paginateGetCoreNetworkChangeSet(
  config: NetworkManagerPaginationConfiguration,
  input: GetCoreNetworkChangeSetCommandInput,
  ...additionalArguments: any
): Paginator<GetCoreNetworkChangeSetCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCoreNetworkChangeSetCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NetworkManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkManager | NetworkManagerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
