import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListFleetsCommandInput,
  ...args: any
): Promise<ListFleetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFleetsCommand(input, ...args));
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListFleetsCommandInput,
  ...args: any
): Promise<ListFleetsCommandOutput> => {
  // @ts-ignore
  return await client.listFleets(input, ...args);
};
export async function* listFleetsPaginate(
  config: RoboMakerPaginationConfiguration,
  input: ListFleetsCommandInput,
  ...additionalArguments: any
): Paginator<ListFleetsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListFleetsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RoboMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RoboMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RoboMaker | RoboMakerClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
