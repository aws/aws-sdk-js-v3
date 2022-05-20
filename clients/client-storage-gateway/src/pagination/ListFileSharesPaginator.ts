// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFileSharesCommand,
  ListFileSharesCommandInput,
  ListFileSharesCommandOutput,
} from "../commands/ListFileSharesCommand";
import { StorageGateway } from "../StorageGateway";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: StorageGateway,
  input: ListFileSharesCommandInput,
  ...args: any
): Promise<ListFileSharesCommandOutput> => {
  // @ts-ignore
  return await client.listFileShares(input, ...args);
};
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
    if (config.client instanceof StorageGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof StorageGatewayClient) {
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
