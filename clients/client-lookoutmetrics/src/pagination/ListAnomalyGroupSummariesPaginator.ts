// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAnomalyGroupSummariesCommand,
  ListAnomalyGroupSummariesCommandInput,
  ListAnomalyGroupSummariesCommandOutput,
} from "../commands/ListAnomalyGroupSummariesCommand";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LookoutMetricsClient,
  input: ListAnomalyGroupSummariesCommandInput,
  ...args: any
): Promise<ListAnomalyGroupSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnomalyGroupSummariesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAnomalyGroupSummaries(
  config: LookoutMetricsPaginationConfiguration,
  input: ListAnomalyGroupSummariesCommandInput,
  ...additionalArguments: any
): Paginator<ListAnomalyGroupSummariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnomalyGroupSummariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LookoutMetricsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LookoutMetrics | LookoutMetricsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
