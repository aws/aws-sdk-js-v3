// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudWatchLogs } from "../CloudWatchLogs";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  GetLogEventsCommand,
  GetLogEventsCommandInput,
  GetLogEventsCommandOutput,
} from "../commands/GetLogEventsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudWatchLogsClient,
  input: GetLogEventsCommandInput,
  ...args: any
): Promise<GetLogEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetLogEventsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudWatchLogs,
  input: GetLogEventsCommandInput,
  ...args: any
): Promise<GetLogEventsCommandOutput> => {
  // @ts-ignore
  return await client.getLogEvents(input, ...args);
};
export async function* paginateGetLogEvents(
  config: CloudWatchLogsPaginationConfiguration,
  input: GetLogEventsCommandInput,
  ...additionalArguments: any
): Paginator<GetLogEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetLogEventsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof CloudWatchLogs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudWatchLogsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextForwardToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
