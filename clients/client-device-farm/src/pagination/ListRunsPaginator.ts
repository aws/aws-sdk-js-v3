// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListRunsCommand, ListRunsCommandInput, ListRunsCommandOutput } from "../commands/ListRunsCommand";
import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListRunsCommandInput,
  ...args: any
): Promise<ListRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRunsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListRunsCommandInput,
  ...args: any
): Promise<ListRunsCommandOutput> => {
  // @ts-ignore
  return await client.listRuns(input, ...args);
};
export async function* paginateListRuns(
  config: DeviceFarmPaginationConfiguration,
  input: ListRunsCommandInput,
  ...additionalArguments: any
): Paginator<ListRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRunsCommandOutput;
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
