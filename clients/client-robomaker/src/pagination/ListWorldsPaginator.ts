// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListWorldsCommand, ListWorldsCommandInput, ListWorldsCommandOutput } from "../commands/ListWorldsCommand";
import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListWorldsCommandInput,
  ...args: any
): Promise<ListWorldsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorldsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RoboMaker,
  input: ListWorldsCommandInput,
  ...args: any
): Promise<ListWorldsCommandOutput> => {
  // @ts-ignore
  return await client.listWorlds(input, ...args);
};
export async function* paginateListWorlds(
  config: RoboMakerPaginationConfiguration,
  input: ListWorldsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorldsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorldsCommandOutput;
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
