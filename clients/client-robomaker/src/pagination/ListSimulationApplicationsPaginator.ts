import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import {
  ListSimulationApplicationsCommand,
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput,
} from "../commands/ListSimulationApplicationsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListSimulationApplicationsCommandInput,
  ...args: any
): Promise<ListSimulationApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSimulationApplicationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RoboMaker,
  input: ListSimulationApplicationsCommandInput,
  ...args: any
): Promise<ListSimulationApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.listSimulationApplications(input, ...args);
};
export async function* paginateListSimulationApplications(
  config: RoboMakerPaginationConfiguration,
  input: ListSimulationApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSimulationApplicationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSimulationApplicationsCommandOutput;
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
