import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import { ListBuildsCommand, ListBuildsCommandInput, ListBuildsCommandOutput } from "../commands/ListBuildsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GameLiftClient,
  input: ListBuildsCommandInput,
  ...args: any
): Promise<ListBuildsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBuildsCommand(input), ...args);
};
const makePagedRequest = async (
  client: GameLift,
  input: ListBuildsCommandInput,
  ...args: any
): Promise<ListBuildsCommandOutput> => {
  // @ts-ignore
  return await client.listBuilds(input, ...args);
};
export async function* listBuildsPaginate(
  config: GameLiftPaginationConfiguration,
  input: ListBuildsCommandInput,
  ...additionalArguments: any
): Paginator<ListBuildsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBuildsCommandOutput;
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
