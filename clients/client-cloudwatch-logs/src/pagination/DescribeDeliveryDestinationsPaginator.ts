// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeDeliveryDestinationsCommand,
  DescribeDeliveryDestinationsCommandInput,
  DescribeDeliveryDestinationsCommandOutput,
} from "../commands/DescribeDeliveryDestinationsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudWatchLogsClient,
  input: DescribeDeliveryDestinationsCommandInput,
  ...args: any
): Promise<DescribeDeliveryDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDeliveryDestinationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDeliveryDestinations(
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeDeliveryDestinationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDeliveryDestinationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDeliveryDestinationsCommandOutput;
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
