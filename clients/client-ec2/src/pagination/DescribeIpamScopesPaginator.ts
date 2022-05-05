// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeIpamScopesCommand,
  DescribeIpamScopesCommandInput,
  DescribeIpamScopesCommandOutput,
} from "../commands/DescribeIpamScopesCommand";
import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeIpamScopesCommandInput,
  ...args: any
): Promise<DescribeIpamScopesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeIpamScopesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeIpamScopesCommandInput,
  ...args: any
): Promise<DescribeIpamScopesCommandOutput> => {
  // @ts-ignore
  return await client.describeIpamScopes(input, ...args);
};
export async function* paginateDescribeIpamScopes(
  config: EC2PaginationConfiguration,
  input: DescribeIpamScopesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeIpamScopesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeIpamScopesCommandOutput;
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
