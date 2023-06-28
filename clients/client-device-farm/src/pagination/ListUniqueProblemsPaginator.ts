// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListUniqueProblemsCommand,
  ListUniqueProblemsCommandInput,
  ListUniqueProblemsCommandOutput,
} from "../commands/ListUniqueProblemsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListUniqueProblemsCommandInput,
  ...args: any
): Promise<ListUniqueProblemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUniqueProblemsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListUniqueProblems(
  config: DeviceFarmPaginationConfiguration,
  input: ListUniqueProblemsCommandInput,
  ...additionalArguments: any
): Paginator<ListUniqueProblemsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUniqueProblemsCommandOutput;
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
