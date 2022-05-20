// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { GetFeedbackCommand, GetFeedbackCommandInput, GetFeedbackCommandOutput } from "../commands/GetFeedbackCommand";
import { LookoutMetrics } from "../LookoutMetrics";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutMetricsClient,
  input: GetFeedbackCommandInput,
  ...args: any
): Promise<GetFeedbackCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetFeedbackCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutMetrics,
  input: GetFeedbackCommandInput,
  ...args: any
): Promise<GetFeedbackCommandOutput> => {
  // @ts-ignore
  return await client.getFeedback(input, ...args);
};
export async function* paginateGetFeedback(
  config: LookoutMetricsPaginationConfiguration,
  input: GetFeedbackCommandInput,
  ...additionalArguments: any
): Paginator<GetFeedbackCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetFeedbackCommandOutput;
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
