// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListAlertsCommand, ListAlertsCommandInput, ListAlertsCommandOutput } from "../commands/ListAlertsCommand";
import { LookoutMetrics } from "../LookoutMetrics";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutMetricsClient,
  input: ListAlertsCommandInput,
  ...args: any
): Promise<ListAlertsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAlertsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutMetrics,
  input: ListAlertsCommandInput,
  ...args: any
): Promise<ListAlertsCommandOutput> => {
  // @ts-ignore
  return await client.listAlerts(input, ...args);
};
export async function* paginateListAlerts(
  config: LookoutMetricsPaginationConfiguration,
  input: ListAlertsCommandInput,
  ...additionalArguments: any
): Paginator<ListAlertsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAlertsCommandOutput;
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
