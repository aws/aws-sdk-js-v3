// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAnomalyDetectorsCommand,
  ListAnomalyDetectorsCommandInput,
  ListAnomalyDetectorsCommandOutput,
} from "../commands/ListAnomalyDetectorsCommand";
import { LookoutMetrics } from "../LookoutMetrics";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutMetricsClient,
  input: ListAnomalyDetectorsCommandInput,
  ...args: any
): Promise<ListAnomalyDetectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnomalyDetectorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutMetrics,
  input: ListAnomalyDetectorsCommandInput,
  ...args: any
): Promise<ListAnomalyDetectorsCommandOutput> => {
  // @ts-ignore
  return await client.listAnomalyDetectors(input, ...args);
};
export async function* paginateListAnomalyDetectors(
  config: LookoutMetricsPaginationConfiguration,
  input: ListAnomalyDetectorsCommandInput,
  ...additionalArguments: any
): Paginator<ListAnomalyDetectorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnomalyDetectorsCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
