// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListVolumesCommand, ListVolumesCommandInput, ListVolumesCommandOutput } from "../commands/ListVolumesCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: ListVolumesCommandInput,
  ...args: any
): Promise<ListVolumesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVolumesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListVolumes(
  config: StorageGatewayPaginationConfiguration,
  input: ListVolumesCommandInput,
  ...additionalArguments: any
): Paginator<ListVolumesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVolumesCommandOutput;
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
