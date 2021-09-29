import { SnowDeviceManagement } from "../SnowDeviceManagement";
import { SnowDeviceManagementClient } from "../SnowDeviceManagementClient";
import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { SnowDeviceManagementPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SnowDeviceManagementClient,
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
  client: SnowDeviceManagement,
  input: ListDevicesCommandInput,
  ...args: any
): Promise<ListDevicesCommandOutput> => {
  // @ts-ignore
  return await client.listDevices(input, ...args);
};
export async function* paginateListDevices(
  config: SnowDeviceManagementPaginationConfiguration,
  input: ListDevicesCommandInput,
  ...additionalArguments: any
): Paginator<ListDevicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDevicesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SnowDeviceManagement) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SnowDeviceManagementClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SnowDeviceManagement | SnowDeviceManagementClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
