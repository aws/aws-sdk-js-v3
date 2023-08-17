// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListConnectPeersCommand,
  ListConnectPeersCommandInput,
  ListConnectPeersCommandOutput,
} from "../commands/ListConnectPeersCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: ListConnectPeersCommandInput,
  ...args: any
): Promise<ListConnectPeersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConnectPeersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListConnectPeers(
  config: NetworkManagerPaginationConfiguration,
  input: ListConnectPeersCommandInput,
  ...additionalArguments: any
): Paginator<ListConnectPeersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConnectPeersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkManagerClient) {
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
