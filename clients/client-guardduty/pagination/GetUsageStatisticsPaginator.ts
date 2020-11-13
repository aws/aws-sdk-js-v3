import { GuardDuty } from "../GuardDuty";
import { GuardDutyClient } from "../GuardDutyClient";
import {
  GetUsageStatisticsCommand,
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput,
} from "../commands/GetUsageStatisticsCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: GetUsageStatisticsCommandInput,
  ...args: any
): Promise<GetUsageStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetUsageStatisticsCommand(input), ...args);
};
const makePagedRequest = async (
  client: GuardDuty,
  input: GetUsageStatisticsCommandInput,
  ...args: any
): Promise<GetUsageStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.getUsageStatistics(input, ...args);
};
export async function* getUsageStatisticsPaginate(
  config: GuardDutyPaginationConfiguration,
  input: GetUsageStatisticsCommandInput,
  ...additionalArguments: any
): Paginator<GetUsageStatisticsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
