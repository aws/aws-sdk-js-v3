// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { Panorama } from "../Panorama";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PanoramaClient,
  input: ListDevicesCommandInput,
  ...args: any
): Promise<ListDevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDevicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Panorama,
  input: ListDevicesCommandInput,
  ...args: any
): Promise<ListDevicesCommandOutput> => {
  // @ts-ignore
  return await client.listDevices(input, ...args);
};
export async function* paginateListDevices(
  config: PanoramaPaginationConfiguration,
  input: ListDevicesCommandInput,
  ...additionalArguments: any
): Paginator<ListDevicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDevicesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Panorama) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PanoramaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Panorama | PanoramaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
