import { CodeBuild } from "../CodeBuild";
import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListBuildsForProjectCommand,
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput,
} from "../commands/ListBuildsForProjectCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListBuildsForProjectCommandInput,
  ...args: any
): Promise<ListBuildsForProjectCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBuildsForProjectCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeBuild,
  input: ListBuildsForProjectCommandInput,
  ...args: any
): Promise<ListBuildsForProjectCommandOutput> => {
  // @ts-ignore
  return await client.listBuildsForProject(input, ...args);
};
export async function* listBuildsForProjectPaginate(
  config: CodeBuildPaginationConfiguration,
  input: ListBuildsForProjectCommandInput,
  ...additionalArguments: any
): Paginator<ListBuildsForProjectCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListBuildsForProjectCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    if (config.client instanceof CodeBuild) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeBuildClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeBuild | CodeBuildClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
