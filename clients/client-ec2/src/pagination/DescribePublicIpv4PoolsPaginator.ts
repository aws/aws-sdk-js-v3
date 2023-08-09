// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribePublicIpv4PoolsCommand,
  DescribePublicIpv4PoolsCommandInput,
  DescribePublicIpv4PoolsCommandOutput,
} from "../commands/DescribePublicIpv4PoolsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribePublicIpv4PoolsCommandInput,
  ...args: any
): Promise<DescribePublicIpv4PoolsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePublicIpv4PoolsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribePublicIpv4Pools(
  config: EC2PaginationConfiguration,
  input: DescribePublicIpv4PoolsCommandInput,
  ...additionalArguments: any
): Paginator<DescribePublicIpv4PoolsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePublicIpv4PoolsCommandOutput;
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
