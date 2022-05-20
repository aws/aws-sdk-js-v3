// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListGameServersCommand,
  ListGameServersCommandInput,
  ListGameServersCommandOutput,
} from "../commands/ListGameServersCommand";
import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: ListGameServersCommandInput,
  ...args: any
): Promise<ListGameServersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGameServersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GameLift,
  input: ListGameServersCommandInput,
  ...args: any
): Promise<ListGameServersCommandOutput> => {
  // @ts-ignore
  return await client.listGameServers(input, ...args);
};
export async function* paginateListGameServers(
  config: GameLiftPaginationConfiguration,
  input: ListGameServersCommandInput,
  ...additionalArguments: any
): Paginator<ListGameServersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGameServersCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
