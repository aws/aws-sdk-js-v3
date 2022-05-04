// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetTimeSeriesServiceStatisticsCommand,
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput,
} from "../commands/GetTimeSeriesServiceStatisticsCommand";
import { XRay } from "../XRay";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: XRayClient,
  input: GetTimeSeriesServiceStatisticsCommandInput,
  ...args: any
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTimeSeriesServiceStatisticsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: XRay,
  input: GetTimeSeriesServiceStatisticsCommandInput,
  ...args: any
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.getTimeSeriesServiceStatistics(input, ...args);
};
export async function* paginateGetTimeSeriesServiceStatistics(
  config: XRayPaginationConfiguration,
  input: GetTimeSeriesServiceStatisticsCommandInput,
  ...additionalArguments: any
): Paginator<GetTimeSeriesServiceStatisticsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTimeSeriesServiceStatisticsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof XRay) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
