// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDevicePoolsCommand,
  ListDevicePoolsCommandInput,
  ListDevicePoolsCommandOutput,
} from "../commands/ListDevicePoolsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof DeviceFarmClient) {
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
