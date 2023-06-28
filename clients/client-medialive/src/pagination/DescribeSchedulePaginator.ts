// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeScheduleCommand,
  DescribeScheduleCommandInput,
  DescribeScheduleCommandOutput,
} from "../commands/DescribeScheduleCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof MediaLiveClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaLive | MediaLiveClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
