// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeBuild } from "../CodeBuild";
import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListReportGroupsCommand,
  ListReportGroupsCommandInput,
  ListReportGroupsCommandOutput,
} from "../commands/ListReportGroupsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListReportGroupsCommandInput,
  ...args: any
): Promise<ListReportGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReportGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeBuild,
  input: ListReportGroupsCommandInput,
  ...args: any
): Promise<ListReportGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listReportGroups(input, ...args);
};
export async function* paginateListReportGroups(
  config: CodeBuildPaginationConfiguration,
  input: ListReportGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListReportGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReportGroupsCommandOutput;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
