// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListTapesCommand, ListTapesCommandInput, ListTapesCommandOutput } from "../commands/ListTapesCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof StorageGatewayClient) {
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
