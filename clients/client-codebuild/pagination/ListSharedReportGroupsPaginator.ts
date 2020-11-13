import { CodeBuild } from "../CodeBuild";
import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListSharedReportGroupsCommand,
  ListSharedReportGroupsCommandInput,
  ListSharedReportGroupsCommandOutput,
} from "../commands/ListSharedReportGroupsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListSharedReportGroupsCommandInput,
  ...args: any
): Promise<ListSharedReportGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSharedReportGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeBuild,
  input: ListSharedReportGroupsCommandInput,
  ...args: any
): Promise<ListSharedReportGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listSharedReportGroups(input, ...args);
};
export async function* listSharedReportGroupsPaginate(
  config: CodeBuildPaginationConfiguration,
  input: ListSharedReportGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListSharedReportGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSharedReportGroupsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeBuild) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeBuildClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeBuild | CodeBuildClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
