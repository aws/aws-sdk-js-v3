import { LookoutMetrics } from "../LookoutMetrics";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import {
  ListAnomalyGroupSummariesCommand,
  ListAnomalyGroupSummariesCommandInput,
  ListAnomalyGroupSummariesCommandOutput,
} from "../commands/ListAnomalyGroupSummariesCommand";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: LookoutMetrics,
  input: ListAnomalyGroupSummariesCommandInput,
  ...args: any
): Promise<ListAnomalyGroupSummariesCommandOutput> => {
  // @ts-ignore
  return await client.listAnomalyGroupSummaries(input, ...args);
};
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
    if (config.client instanceof LookoutMetrics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LookoutMetricsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LookoutMetrics | LookoutMetricsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
