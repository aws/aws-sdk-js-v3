import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import { ListScriptsCommand, ListScriptsCommandInput, ListScriptsCommandOutput } from "../commands/ListScriptsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: ListScriptsCommandInput,
  ...args: any
): Promise<ListScriptsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListScriptsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GameLift,
  input: ListScriptsCommandInput,
  ...args: any
): Promise<ListScriptsCommandOutput> => {
  // @ts-ignore
  return await client.listScripts(input, ...args);
};
export async function* paginateListScripts(
  config: GameLiftPaginationConfiguration,
  input: ListScriptsCommandInput,
  ...additionalArguments: any
): Paginator<ListScriptsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListScriptsCommandOutput;
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
