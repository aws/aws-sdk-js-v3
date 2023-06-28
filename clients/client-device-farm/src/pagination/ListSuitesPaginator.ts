// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListSuitesCommand, ListSuitesCommandInput, ListSuitesCommandOutput } from "../commands/ListSuitesCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListSuitesCommandInput,
  ...args: any
): Promise<ListSuitesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSuitesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSuites(
  config: DeviceFarmPaginationConfiguration,
  input: ListSuitesCommandInput,
  ...additionalArguments: any
): Paginator<ListSuitesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSuitesCommandOutput;
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
