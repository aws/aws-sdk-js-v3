// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListLaunchActionsCommand,
  ListLaunchActionsCommandInput,
  ListLaunchActionsCommandOutput,
} from "../commands/ListLaunchActionsCommand";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DrsClient,
  input: ListLaunchActionsCommandInput,
  ...args: any
): Promise<ListLaunchActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLaunchActionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLaunchActions(
  config: DrsPaginationConfiguration,
  input: ListLaunchActionsCommandInput,
  ...additionalArguments: any
): Paginator<ListLaunchActionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLaunchActionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof DrsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Drs | DrsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
