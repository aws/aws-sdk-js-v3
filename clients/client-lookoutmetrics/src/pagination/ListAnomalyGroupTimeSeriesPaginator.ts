import { LookoutMetrics } from "../LookoutMetrics";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import {
  ListAnomalyGroupTimeSeriesCommand,
  ListAnomalyGroupTimeSeriesCommandInput,
  ListAnomalyGroupTimeSeriesCommandOutput,
} from "../commands/ListAnomalyGroupTimeSeriesCommand";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutMetricsClient,
  input: ListAnomalyGroupTimeSeriesCommandInput,
  ...args: any
): Promise<ListAnomalyGroupTimeSeriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnomalyGroupTimeSeriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutMetrics,
  input: ListAnomalyGroupTimeSeriesCommandInput,
  ...args: any
): Promise<ListAnomalyGroupTimeSeriesCommandOutput> => {
  // @ts-ignore
  return await client.listAnomalyGroupTimeSeries(input, ...args);
};
export async function* paginateListAnomalyGroupTimeSeries(
  config: LookoutMetricsPaginationConfiguration,
  input: ListAnomalyGroupTimeSeriesCommandInput,
  ...additionalArguments: any
): Paginator<ListAnomalyGroupTimeSeriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnomalyGroupTimeSeriesCommandOutput;
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
