// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeDeliveriesCommand,
  DescribeDeliveriesCommandInput,
  DescribeDeliveriesCommandOutput,
} from "../commands/DescribeDeliveriesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudWatchLogsClient,
  input: DescribeDeliveriesCommandInput,
  ...args: any
): Promise<DescribeDeliveriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDeliveriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDeliveries(
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeDeliveriesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDeliveriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDeliveriesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof CloudWatchLogsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
