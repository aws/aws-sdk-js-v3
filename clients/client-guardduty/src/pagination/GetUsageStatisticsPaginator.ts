// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetUsageStatisticsCommand,
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput,
} from "../commands/GetUsageStatisticsCommand";
import { GuardDuty } from "../GuardDuty";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: GetUsageStatisticsCommandInput,
  ...args: any
): Promise<GetUsageStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetUsageStatisticsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GuardDuty,
  input: GetUsageStatisticsCommandInput,
  ...args: any
): Promise<GetUsageStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.getUsageStatistics(input, ...args);
};
export async function* paginateGetUsageStatistics(
  config: GuardDutyPaginationConfiguration,
  input: GetUsageStatisticsCommandInput,
  ...additionalArguments: any
): Paginator<GetUsageStatisticsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetUsageStatisticsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GuardDuty) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GuardDutyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GuardDuty | GuardDutyClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
