// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetQueryResultsCommand,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
} from "../commands/GetQueryResultsCommand";
import { InternetMonitorClient } from "../InternetMonitorClient";
import { InternetMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: InternetMonitorClient,
  input: GetQueryResultsCommandInput,
  ...args: any
): Promise<GetQueryResultsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetQueryResultsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetQueryResults(
  config: InternetMonitorPaginationConfiguration,
  input: GetQueryResultsCommandInput,
  ...additionalArguments: any
): Paginator<GetQueryResultsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetQueryResultsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof InternetMonitorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected InternetMonitor | InternetMonitorClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
