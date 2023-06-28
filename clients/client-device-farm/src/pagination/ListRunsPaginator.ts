// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListRunsCommand, ListRunsCommandInput, ListRunsCommandOutput } from "../commands/ListRunsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
