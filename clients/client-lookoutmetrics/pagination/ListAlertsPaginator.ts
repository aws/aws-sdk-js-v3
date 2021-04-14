import { LookoutMetrics } from "../LookoutMetrics";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { ListAlertsCommand, ListAlertsCommandInput, ListAlertsCommandOutput } from "../commands/ListAlertsCommand";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
