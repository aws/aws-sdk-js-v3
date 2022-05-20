// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListTapesCommand, ListTapesCommandInput, ListTapesCommandOutput } from "../commands/ListTapesCommand";
import { StorageGateway } from "../StorageGateway";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: ListTapesCommandInput,
  ...args: any
): Promise<ListTapesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTapesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: StorageGateway,
  input: ListTapesCommandInput,
  ...args: any
): Promise<ListTapesCommandOutput> => {
  // @ts-ignore
  return await client.listTapes(input, ...args);
};
export async function* paginateListTapes(
  config: StorageGatewayPaginationConfiguration,
  input: ListTapesCommandInput,
  ...additionalArguments: any
): Paginator<ListTapesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTapesCommandOutput;
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
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
