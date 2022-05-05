// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudWatch } from "../CloudWatch";
import { CloudWatchClient } from "../CloudWatchClient";
import {
  DescribeAlarmHistoryCommand,
  DescribeAlarmHistoryCommandInput,
  DescribeAlarmHistoryCommandOutput,
} from "../commands/DescribeAlarmHistoryCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: DescribeAlarmHistoryCommandInput,
  ...args: any
): Promise<DescribeAlarmHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAlarmHistoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudWatch,
  input: DescribeAlarmHistoryCommandInput,
  ...args: any
): Promise<DescribeAlarmHistoryCommandOutput> => {
  // @ts-ignore
  return await client.describeAlarmHistory(input, ...args);
};
export async function* paginateDescribeAlarmHistory(
  config: CloudWatchPaginationConfiguration,
  input: DescribeAlarmHistoryCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAlarmHistoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAlarmHistoryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof CloudWatch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudWatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatch | CloudWatchClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
