import { CloudWatchLogs } from "../CloudWatchLogs";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  GetLogEventsCommand,
  GetLogEventsCommandInput,
  GetLogEventsCommandOutput,
} from "../commands/GetLogEventsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudWatchLogsClient,
  input: GetLogEventsCommandInput,
  ...args: any
): Promise<GetLogEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetLogEventsCommand(input), ...args);
};
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
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.nextForwardToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
