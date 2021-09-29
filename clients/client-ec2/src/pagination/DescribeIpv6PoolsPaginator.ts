import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeIpv6PoolsCommand,
  DescribeIpv6PoolsCommandInput,
  DescribeIpv6PoolsCommandOutput,
} from "../commands/DescribeIpv6PoolsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeIpv6PoolsCommandInput,
  ...args: any
): Promise<DescribeIpv6PoolsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeIpv6PoolsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeIpv6PoolsCommandInput,
  ...args: any
): Promise<DescribeIpv6PoolsCommandOutput> => {
  // @ts-ignore
  return await client.describeIpv6Pools(input, ...args);
};
export async function* paginateDescribeIpv6Pools(
  config: EC2PaginationConfiguration,
  input: DescribeIpv6PoolsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeIpv6PoolsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeIpv6PoolsCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
