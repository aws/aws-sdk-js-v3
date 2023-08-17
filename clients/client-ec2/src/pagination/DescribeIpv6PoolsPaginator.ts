// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeIpv6PoolsCommand,
  DescribeIpv6PoolsCommandInput,
  DescribeIpv6PoolsCommandOutput,
} from "../commands/DescribeIpv6PoolsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
