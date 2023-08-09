// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTestGridSessionActionsCommand,
  ListTestGridSessionActionsCommandInput,
  ListTestGridSessionActionsCommandOutput,
} from "../commands/ListTestGridSessionActionsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListTestGridSessionActionsCommandInput,
  ...args: any
): Promise<ListTestGridSessionActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTestGridSessionActionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTestGridSessionActions(
  config: DeviceFarmPaginationConfiguration,
  input: ListTestGridSessionActionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTestGridSessionActionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTestGridSessionActionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResult"] = config.pageSize;
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
