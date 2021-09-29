import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import {
  ListGameServerGroupsCommand,
  ListGameServerGroupsCommandInput,
  ListGameServerGroupsCommandOutput,
} from "../commands/ListGameServerGroupsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: GameLift,
  input: ListGameServerGroupsCommandInput,
  ...args: any
): Promise<ListGameServerGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listGameServerGroups(input, ...args);
};
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
    if (config.client instanceof GameLift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GameLiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GameLift | GameLiftClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
