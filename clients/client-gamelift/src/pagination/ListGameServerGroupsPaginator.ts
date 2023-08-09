// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListGameServerGroupsCommand,
  ListGameServerGroupsCommandInput,
  ListGameServerGroupsCommandOutput,
} from "../commands/ListGameServerGroupsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: ListGameServerGroupsCommandInput,
  ...args: any
): Promise<ListGameServerGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGameServerGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListGameServerGroups(
  config: GameLiftPaginationConfiguration,
  input: ListGameServerGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListGameServerGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGameServerGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof GameLiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GameLift | GameLiftClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
