// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import { ListMetricsCommand, ListMetricsCommandInput, ListMetricsCommandOutput } from "../commands/ListMetricsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: ListMetricsCommandInput,
  ...args: any
): Promise<ListMetricsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMetricsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListMetrics(
  config: CloudWatchPaginationConfiguration,
  input: ListMetricsCommandInput,
  ...additionalArguments: any
): Paginator<ListMetricsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMetricsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
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
