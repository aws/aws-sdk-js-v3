import { MediaLive } from "../MediaLive";
import { MediaLiveClient } from "../MediaLiveClient";
import {
  DescribeScheduleCommand,
  DescribeScheduleCommandInput,
  DescribeScheduleCommandOutput,
} from "../commands/DescribeScheduleCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaLiveClient,
  input: DescribeScheduleCommandInput,
  ...args: any
): Promise<DescribeScheduleCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeScheduleCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaLive,
  input: DescribeScheduleCommandInput,
  ...args: any
): Promise<DescribeScheduleCommandOutput> => {
  // @ts-ignore
  return await client.describeSchedule(input, ...args);
};
export async function* paginateDescribeSchedule(
  config: MediaLivePaginationConfiguration,
  input: DescribeScheduleCommandInput,
  ...additionalArguments: any
): Paginator<DescribeScheduleCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeScheduleCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaLive) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaLiveClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaLive | MediaLiveClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
