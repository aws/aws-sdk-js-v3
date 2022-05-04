// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListRobotsCommand, ListRobotsCommandInput, ListRobotsCommandOutput } from "../commands/ListRobotsCommand";
import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListRobotsCommandInput,
  ...args: any
): Promise<ListRobotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRobotsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RoboMaker,
  input: ListRobotsCommandInput,
  ...args: any
): Promise<ListRobotsCommandOutput> => {
  // @ts-ignore
  return await client.listRobots(input, ...args);
};
export async function* paginateListRobots(
  config: RoboMakerPaginationConfiguration,
  input: ListRobotsCommandInput,
  ...additionalArguments: any
): Paginator<ListRobotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRobotsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RoboMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RoboMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RoboMaker | RoboMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
