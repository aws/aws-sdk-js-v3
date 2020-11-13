import { GameLift } from "../GameLift";
import { GameLiftClient } from "../GameLiftClient";
import {
  ListGameServersCommand,
  ListGameServersCommandInput,
  ListGameServersCommandOutput,
} from "../commands/ListGameServersCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GameLiftClient,
  input: ListGameServersCommandInput,
  ...args: any
): Promise<ListGameServersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGameServersCommand(input), ...args);
};
const makePagedRequest = async (
  client: GameLift,
  input: ListGameServersCommandInput,
  ...args: any
): Promise<ListGameServersCommandOutput> => {
  // @ts-ignore
  return await client.listGameServers(input, ...args);
};
export async function* listGameServersPaginate(
  config: GameLiftPaginationConfiguration,
  input: ListGameServersCommandInput,
  ...additionalArguments: any
): Paginator<ListGameServersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
