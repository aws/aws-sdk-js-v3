import { CodeBuild } from "../CodeBuild";
import { CodeBuildClient } from "../CodeBuildClient";
import { ListReportsCommand, ListReportsCommandInput, ListReportsCommandOutput } from "../commands/ListReportsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListReportsCommandInput,
  ...args: any
): Promise<ListReportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReportsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeBuild,
  input: ListReportsCommandInput,
  ...args: any
): Promise<ListReportsCommandOutput> => {
  // @ts-ignore
  return await client.listReports(input, ...args);
};
export async function* listReportsPaginate(
  config: CodeBuildPaginationConfiguration,
  input: ListReportsCommandInput,
  ...additionalArguments: any
): Paginator<ListReportsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListReportsCommandOutput;
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
