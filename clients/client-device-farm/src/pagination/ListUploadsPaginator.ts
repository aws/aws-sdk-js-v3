// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListUploadsCommand, ListUploadsCommandInput, ListUploadsCommandOutput } from "../commands/ListUploadsCommand";
import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListUploadsCommandInput,
  ...args: any
): Promise<ListUploadsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUploadsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListUploadsCommandInput,
  ...args: any
): Promise<ListUploadsCommandOutput> => {
  // @ts-ignore
  return await client.listUploads(input, ...args);
};
export async function* paginateListUploads(
  config: DeviceFarmPaginationConfiguration,
  input: ListUploadsCommandInput,
  ...additionalArguments: any
): Paginator<ListUploadsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUploadsCommandOutput;
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
