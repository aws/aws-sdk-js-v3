// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeDestinationsCommand,
  DescribeDestinationsCommandInput,
  DescribeDestinationsCommandOutput,
} from "../commands/DescribeDestinationsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudWatchLogsClient,
  input: DescribeDestinationsCommandInput,
  ...args: any
): Promise<DescribeDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDestinationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDestinations(
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeDestinationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDestinationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDestinationsCommandOutput;
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
