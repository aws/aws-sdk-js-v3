import { Macie2 } from "../Macie2";
import { Macie2Client } from "../Macie2Client";
import {
  GetUsageStatisticsCommand,
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput,
} from "../commands/GetUsageStatisticsCommand";
import { Macie2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: Macie2Client,
  input: GetUsageStatisticsCommandInput,
  ...args: any
): Promise<GetUsageStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetUsageStatisticsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Macie2,
  input: GetUsageStatisticsCommandInput,
  ...args: any
): Promise<GetUsageStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.getUsageStatistics(input, ...args);
};
export async function* paginateGetUsageStatistics(
  config: Macie2PaginationConfiguration,
  input: GetUsageStatisticsCommandInput,
  ...additionalArguments: any
): Paginator<GetUsageStatisticsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetUsageStatisticsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Macie2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Macie2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie2 | Macie2Client");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
