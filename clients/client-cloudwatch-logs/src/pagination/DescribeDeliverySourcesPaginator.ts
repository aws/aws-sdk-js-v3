// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeDeliverySourcesCommand,
  DescribeDeliverySourcesCommandInput,
  DescribeDeliverySourcesCommandOutput,
} from "../commands/DescribeDeliverySourcesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudWatchLogsClient,
  input: DescribeDeliverySourcesCommandInput,
  ...args: any
): Promise<DescribeDeliverySourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDeliverySourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDeliverySources(
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeDeliverySourcesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDeliverySourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDeliverySourcesCommandOutput;
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
