// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListMetricSetsCommand,
  ListMetricSetsCommandInput,
  ListMetricSetsCommandOutput,
} from "../commands/ListMetricSetsCommand";
import { LookoutMetrics } from "../LookoutMetrics";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutMetricsClient,
  input: ListMetricSetsCommandInput,
  ...args: any
): Promise<ListMetricSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMetricSetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutMetrics,
  input: ListMetricSetsCommandInput,
  ...args: any
): Promise<ListMetricSetsCommandOutput> => {
  // @ts-ignore
  return await client.listMetricSets(input, ...args);
};
export async function* paginateListMetricSets(
  config: LookoutMetricsPaginationConfiguration,
  input: ListMetricSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListMetricSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMetricSetsCommandOutput;
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
