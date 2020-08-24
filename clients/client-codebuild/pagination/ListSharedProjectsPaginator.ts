import { CodeBuild } from "../CodeBuild";
import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListSharedProjectsCommand,
  ListSharedProjectsCommandInput,
  ListSharedProjectsCommandOutput,
} from "../commands/ListSharedProjectsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListSharedProjectsCommandInput,
  ...args: any
): Promise<ListSharedProjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSharedProjectsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeBuild,
  input: ListSharedProjectsCommandInput,
  ...args: any
): Promise<ListSharedProjectsCommandOutput> => {
  // @ts-ignore
  return await client.listSharedProjects(input, ...args);
};
export async function* listSharedProjectsPaginate(
  config: CodeBuildPaginationConfiguration,
  input: ListSharedProjectsCommandInput,
  ...additionalArguments: any
): Paginator<ListSharedProjectsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSharedProjectsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
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
