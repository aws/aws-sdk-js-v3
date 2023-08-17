// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  ListMetricStreamsCommand,
  ListMetricStreamsCommandInput,
  ListMetricStreamsCommandOutput,
} from "../commands/ListMetricStreamsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: ListMetricStreamsCommandInput,
  ...args: any
): Promise<ListMetricStreamsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMetricStreamsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListMetricStreams(
  config: CloudWatchPaginationConfiguration,
  input: ListMetricStreamsCommandInput,
  ...additionalArguments: any
): Paginator<ListMetricStreamsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMetricStreamsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
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
