import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import { ListRobotsCommand, ListRobotsCommandInput, ListRobotsCommandOutput } from "../commands/ListRobotsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListRobotsCommandInput,
  ...args: any
): Promise<ListRobotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRobotsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListRobotsCommandInput,
  ...args: any
): Promise<ListRobotsCommandOutput> => {
  // @ts-ignore
  return await client.listRobots(input, ...args);
};
export async function* listRobotsPaginate(
  config: RoboMakerPaginationConfiguration,
  input: ListRobotsCommandInput,
  ...additionalArguments: any
): Paginator<ListRobotsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
