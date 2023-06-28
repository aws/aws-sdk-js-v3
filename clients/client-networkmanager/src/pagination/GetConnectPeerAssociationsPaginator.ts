// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetConnectPeerAssociationsCommand,
  GetConnectPeerAssociationsCommandInput,
  GetConnectPeerAssociationsCommandOutput,
} from "../commands/GetConnectPeerAssociationsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetConnectPeerAssociationsCommandInput,
  ...args: any
): Promise<GetConnectPeerAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetConnectPeerAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetConnectPeerAssociations(
  config: NetworkManagerPaginationConfiguration,
  input: GetConnectPeerAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<GetConnectPeerAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetConnectPeerAssociationsCommandOutput;
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
