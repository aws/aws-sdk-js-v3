import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import {
  ListSimulationApplicationsCommand,
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput,
} from "../commands/ListSimulationApplicationsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListSimulationApplicationsCommandInput,
  ...args: any
): Promise<ListSimulationApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSimulationApplicationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListSimulationApplicationsCommandInput,
  ...args: any
): Promise<ListSimulationApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.listSimulationApplications(input, ...args);
};
export async function* listSimulationApplicationsPaginate(
  config: RoboMakerPaginationConfiguration,
  input: ListSimulationApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSimulationApplicationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSimulationApplicationsCommandOutput;
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
