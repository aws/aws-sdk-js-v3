// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDevicePoolsCommand,
  ListDevicePoolsCommandInput,
  ListDevicePoolsCommandOutput,
} from "../commands/ListDevicePoolsCommand";
import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListDevicePoolsCommandInput,
  ...args: any
): Promise<ListDevicePoolsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDevicePoolsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListDevicePoolsCommandInput,
  ...args: any
): Promise<ListDevicePoolsCommandOutput> => {
  // @ts-ignore
  return await client.listDevicePools(input, ...args);
};
export async function* paginateListDevicePools(
  config: DeviceFarmPaginationConfiguration,
  input: ListDevicePoolsCommandInput,
  ...additionalArguments: any
): Paginator<ListDevicePoolsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDevicePoolsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof DeviceFarm) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DeviceFarmClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DeviceFarm | DeviceFarmClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
