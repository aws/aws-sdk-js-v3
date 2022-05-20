// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeGuruProfiler } from "../CodeGuruProfiler";
import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient";
import {
  ListFindingsReportsCommand,
  ListFindingsReportsCommandInput,
  ListFindingsReportsCommandOutput,
} from "../commands/ListFindingsReportsCommand";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeGuruProfilerClient,
  input: ListFindingsReportsCommandInput,
  ...args: any
): Promise<ListFindingsReportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFindingsReportsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeGuruProfiler,
  input: ListFindingsReportsCommandInput,
  ...args: any
): Promise<ListFindingsReportsCommandOutput> => {
  // @ts-ignore
  return await client.listFindingsReports(input, ...args);
};
export async function* paginateListFindingsReports(
  config: CodeGuruProfilerPaginationConfiguration,
  input: ListFindingsReportsCommandInput,
  ...additionalArguments: any
): Paginator<ListFindingsReportsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFindingsReportsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeGuruProfiler) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeGuruProfilerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeGuruProfiler | CodeGuruProfilerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
