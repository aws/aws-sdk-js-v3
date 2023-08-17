// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListClientDevicesAssociatedWithCoreDeviceCommand,
  ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ListClientDevicesAssociatedWithCoreDeviceCommandOutput,
} from "../commands/ListClientDevicesAssociatedWithCoreDeviceCommand";
import { GreengrassV2Client } from "../GreengrassV2Client";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GreengrassV2Client,
  input: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ...args: any
): Promise<ListClientDevicesAssociatedWithCoreDeviceCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClientDevicesAssociatedWithCoreDeviceCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListClientDevicesAssociatedWithCoreDevice(
  config: GreengrassV2PaginationConfiguration,
  input: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ...additionalArguments: any
): Paginator<ListClientDevicesAssociatedWithCoreDeviceCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClientDevicesAssociatedWithCoreDeviceCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof GreengrassV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GreengrassV2 | GreengrassV2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
