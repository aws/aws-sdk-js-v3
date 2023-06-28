// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  DescribeAlarmsCommand,
  DescribeAlarmsCommandInput,
  DescribeAlarmsCommandOutput,
} from "../commands/DescribeAlarmsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: DescribeAlarmsCommandInput,
  ...args: any
): Promise<DescribeAlarmsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAlarmsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAlarms(
  config: CloudWatchPaginationConfiguration,
  input: DescribeAlarmsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAlarmsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAlarmsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof CloudWatchClient) {
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
