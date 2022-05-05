// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListTestsCommand, ListTestsCommandInput, ListTestsCommandOutput } from "../commands/ListTestsCommand";
import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListTestsCommandInput,
  ...args: any
): Promise<ListTestsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTestsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListTestsCommandInput,
  ...args: any
): Promise<ListTestsCommandOutput> => {
  // @ts-ignore
  return await client.listTests(input, ...args);
};
export async function* paginateListTests(
  config: DeviceFarmPaginationConfiguration,
  input: ListTestsCommandInput,
  ...additionalArguments: any
): Paginator<ListTestsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTestsCommandOutput;
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
