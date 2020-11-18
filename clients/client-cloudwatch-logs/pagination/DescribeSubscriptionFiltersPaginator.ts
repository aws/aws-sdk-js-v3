import { CloudWatchLogs } from "../CloudWatchLogs";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeSubscriptionFiltersCommand,
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput,
} from "../commands/DescribeSubscriptionFiltersCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudWatchLogsClient,
  input: DescribeSubscriptionFiltersCommandInput,
  ...args: any
): Promise<DescribeSubscriptionFiltersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSubscriptionFiltersCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudWatchLogs,
  input: DescribeSubscriptionFiltersCommandInput,
  ...args: any
): Promise<DescribeSubscriptionFiltersCommandOutput> => {
  // @ts-ignore
  return await client.describeSubscriptionFilters(input, ...args);
};
export async function* paginateDescribeSubscriptionFilters(
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeSubscriptionFiltersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSubscriptionFiltersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSubscriptionFiltersCommandOutput;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
