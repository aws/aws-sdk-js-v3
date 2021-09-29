import { StorageGateway } from "../StorageGateway";
import { StorageGatewayClient } from "../StorageGatewayClient";
import {
  ListFileSystemAssociationsCommand,
  ListFileSystemAssociationsCommandInput,
  ListFileSystemAssociationsCommandOutput,
} from "../commands/ListFileSystemAssociationsCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: StorageGateway,
  input: ListFileSystemAssociationsCommandInput,
  ...args: any
): Promise<ListFileSystemAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.listFileSystemAssociations(input, ...args);
};
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
    if (config.client instanceof StorageGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof StorageGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected StorageGateway | StorageGatewayClient");
    }
    yield page;
    token = page.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
