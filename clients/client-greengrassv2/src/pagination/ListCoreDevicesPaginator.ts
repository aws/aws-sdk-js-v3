// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCoreDevicesCommand,
  ListCoreDevicesCommandInput,
  ListCoreDevicesCommandOutput,
} from "../commands/ListCoreDevicesCommand";
import { GreengrassV2 } from "../GreengrassV2";
import { GreengrassV2Client } from "../GreengrassV2Client";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GreengrassV2Client,
  input: ListCoreDevicesCommandInput,
  ...args: any
): Promise<ListCoreDevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCoreDevicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GreengrassV2,
  input: ListCoreDevicesCommandInput,
  ...args: any
): Promise<ListCoreDevicesCommandOutput> => {
  // @ts-ignore
  return await client.listCoreDevices(input, ...args);
};
export async function* paginateListCoreDevices(
  config: GreengrassV2PaginationConfiguration,
  input: ListCoreDevicesCommandInput,
  ...additionalArguments: any
): Paginator<ListCoreDevicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCoreDevicesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof GreengrassV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GreengrassV2Client) {
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
