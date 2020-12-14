import { StorageGateway } from "../StorageGateway";
import { StorageGatewayClient } from "../StorageGatewayClient";
import {
  ListTapePoolsCommand,
  ListTapePoolsCommandInput,
  ListTapePoolsCommandOutput,
} from "../commands/ListTapePoolsCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: ListTapePoolsCommandInput,
  ...args: any
): Promise<ListTapePoolsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTapePoolsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: StorageGateway,
  input: ListTapePoolsCommandInput,
  ...args: any
): Promise<ListTapePoolsCommandOutput> => {
  // @ts-ignore
  return await client.listTapePools(input, ...args);
};
export async function* paginateListTapePools(
  config: StorageGatewayPaginationConfiguration,
  input: ListTapePoolsCommandInput,
  ...additionalArguments: any
): Paginator<ListTapePoolsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTapePoolsCommandOutput;
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
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
