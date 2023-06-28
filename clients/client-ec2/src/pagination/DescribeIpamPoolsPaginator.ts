// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeIpamPoolsCommand,
  DescribeIpamPoolsCommandInput,
  DescribeIpamPoolsCommandOutput,
} from "../commands/DescribeIpamPoolsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeIpamPoolsCommandInput,
  ...args: any
): Promise<DescribeIpamPoolsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeIpamPoolsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeIpamPools(
  config: EC2PaginationConfiguration,
  input: DescribeIpamPoolsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeIpamPoolsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeIpamPoolsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2Client) {
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
