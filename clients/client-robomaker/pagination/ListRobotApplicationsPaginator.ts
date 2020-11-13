import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import {
  ListRobotApplicationsCommand,
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput,
} from "../commands/ListRobotApplicationsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListRobotApplicationsCommandInput,
  ...args: any
): Promise<ListRobotApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRobotApplicationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListRobotApplicationsCommandInput,
  ...args: any
): Promise<ListRobotApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.listRobotApplications(input, ...args);
};
export async function* listRobotApplicationsPaginate(
  config: RoboMakerPaginationConfiguration,
  input: ListRobotApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListRobotApplicationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRobotApplicationsCommandOutput;
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
