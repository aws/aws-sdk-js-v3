// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListFileSharesCommand,
  ListFileSharesCommandInput,
  ListFileSharesCommandOutput,
} from "../commands/ListFileSharesCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: ListFileSharesCommandInput,
  ...args: any
): Promise<ListFileSharesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFileSharesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFileShares(
  config: StorageGatewayPaginationConfiguration,
  input: ListFileSharesCommandInput,
  ...additionalArguments: any
): Paginator<ListFileSharesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFileSharesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof StorageGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected StorageGateway | StorageGatewayClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
