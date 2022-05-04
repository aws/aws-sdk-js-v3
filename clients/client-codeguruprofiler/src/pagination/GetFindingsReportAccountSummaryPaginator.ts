// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeGuruProfiler } from "../CodeGuruProfiler";
import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient";
import {
  GetFindingsReportAccountSummaryCommand,
  GetFindingsReportAccountSummaryCommandInput,
  GetFindingsReportAccountSummaryCommandOutput,
} from "../commands/GetFindingsReportAccountSummaryCommand";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeGuruProfilerClient,
  input: GetFindingsReportAccountSummaryCommandInput,
  ...args: any
): Promise<GetFindingsReportAccountSummaryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetFindingsReportAccountSummaryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeGuruProfiler,
  input: GetFindingsReportAccountSummaryCommandInput,
  ...args: any
): Promise<GetFindingsReportAccountSummaryCommandOutput> => {
  // @ts-ignore
  return await client.getFindingsReportAccountSummary(input, ...args);
};
export async function* paginateGetFindingsReportAccountSummary(
  config: CodeGuruProfilerPaginationConfiguration,
  input: GetFindingsReportAccountSummaryCommandInput,
  ...additionalArguments: any
): Paginator<GetFindingsReportAccountSummaryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetFindingsReportAccountSummaryCommandOutput;
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
