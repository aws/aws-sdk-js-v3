// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDeviceResourcesCommand,
  ListDeviceResourcesCommandInput,
  ListDeviceResourcesCommandOutput,
} from "../commands/ListDeviceResourcesCommand";
import { SnowDeviceManagement } from "../SnowDeviceManagement";
import { SnowDeviceManagementClient } from "../SnowDeviceManagementClient";
import { SnowDeviceManagementPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SnowDeviceManagementClient,
  input: ListDeviceResourcesCommandInput,
  ...args: any
): Promise<ListDeviceResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeviceResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SnowDeviceManagement,
  input: ListDeviceResourcesCommandInput,
  ...args: any
): Promise<ListDeviceResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listDeviceResources(input, ...args);
};
export async function* paginateListDeviceResources(
  config: SnowDeviceManagementPaginationConfiguration,
  input: ListDeviceResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListDeviceResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeviceResourcesCommandOutput;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
