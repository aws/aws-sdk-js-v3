// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListFileSystemAssociationsCommand,
  ListFileSystemAssociationsCommandInput,
  ListFileSystemAssociationsCommandOutput,
} from "../commands/ListFileSystemAssociationsCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: ListFileSystemAssociationsCommandInput,
  ...args: any
): Promise<ListFileSystemAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFileSystemAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFileSystemAssociations(
  config: StorageGatewayPaginationConfiguration,
  input: ListFileSystemAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListFileSystemAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFileSystemAssociationsCommandOutput;
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
