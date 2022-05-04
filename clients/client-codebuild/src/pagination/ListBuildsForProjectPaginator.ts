// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeBuild } from "../CodeBuild";
import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListBuildsForProjectCommand,
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput,
} from "../commands/ListBuildsForProjectCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListBuildsForProjectCommandInput,
  ...args: any
): Promise<ListBuildsForProjectCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBuildsForProjectCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeBuild,
  input: ListBuildsForProjectCommandInput,
  ...args: any
): Promise<ListBuildsForProjectCommandOutput> => {
  // @ts-ignore
  return await client.listBuildsForProject(input, ...args);
};
export async function* paginateListBuildsForProject(
  config: CodeBuildPaginationConfiguration,
  input: ListBuildsForProjectCommandInput,
  ...additionalArguments: any
): Paginator<ListBuildsForProjectCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBuildsForProjectCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof CodeBuild) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeBuildClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeBuild | CodeBuildClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
