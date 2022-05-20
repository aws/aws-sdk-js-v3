// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCoreNetworkPolicyVersionsCommand,
  ListCoreNetworkPolicyVersionsCommandInput,
  ListCoreNetworkPolicyVersionsCommandOutput,
} from "../commands/ListCoreNetworkPolicyVersionsCommand";
import { NetworkManager } from "../NetworkManager";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: ListCoreNetworkPolicyVersionsCommandInput,
  ...args: any
): Promise<ListCoreNetworkPolicyVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCoreNetworkPolicyVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: NetworkManager,
  input: ListCoreNetworkPolicyVersionsCommandInput,
  ...args: any
): Promise<ListCoreNetworkPolicyVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listCoreNetworkPolicyVersions(input, ...args);
};
export async function* paginateListCoreNetworkPolicyVersions(
  config: NetworkManagerPaginationConfiguration,
  input: ListCoreNetworkPolicyVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListCoreNetworkPolicyVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCoreNetworkPolicyVersionsCommandOutput;
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
