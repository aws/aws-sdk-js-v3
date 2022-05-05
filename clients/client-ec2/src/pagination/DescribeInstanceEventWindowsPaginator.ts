// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeInstanceEventWindowsCommand,
  DescribeInstanceEventWindowsCommandInput,
  DescribeInstanceEventWindowsCommandOutput,
} from "../commands/DescribeInstanceEventWindowsCommand";
import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeInstanceEventWindowsCommandInput,
  ...args: any
): Promise<DescribeInstanceEventWindowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstanceEventWindowsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeInstanceEventWindowsCommandInput,
  ...args: any
): Promise<DescribeInstanceEventWindowsCommandOutput> => {
  // @ts-ignore
  return await client.describeInstanceEventWindows(input, ...args);
};
export async function* paginateDescribeInstanceEventWindows(
  config: EC2PaginationConfiguration,
  input: DescribeInstanceEventWindowsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstanceEventWindowsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstanceEventWindowsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
