// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRobotApplicationsCommand,
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput,
} from "../commands/ListRobotApplicationsCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListRobotApplicationsCommandInput,
  ...args: any
): Promise<ListRobotApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRobotApplicationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRobotApplications(
  config: RoboMakerPaginationConfiguration,
  input: ListRobotApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListRobotApplicationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRobotApplicationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RoboMakerClient) {
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
