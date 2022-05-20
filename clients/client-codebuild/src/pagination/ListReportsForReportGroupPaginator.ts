// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeBuild } from "../CodeBuild";
import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListReportsForReportGroupCommand,
  ListReportsForReportGroupCommandInput,
  ListReportsForReportGroupCommandOutput,
} from "../commands/ListReportsForReportGroupCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListReportsForReportGroupCommandInput,
  ...args: any
): Promise<ListReportsForReportGroupCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReportsForReportGroupCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeBuild,
  input: ListReportsForReportGroupCommandInput,
  ...args: any
): Promise<ListReportsForReportGroupCommandOutput> => {
  // @ts-ignore
  return await client.listReportsForReportGroup(input, ...args);
};
export async function* paginateListReportsForReportGroup(
  config: CodeBuildPaginationConfiguration,
  input: ListReportsForReportGroupCommandInput,
  ...additionalArguments: any
): Paginator<ListReportsForReportGroupCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReportsForReportGroupCommandOutput;
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
