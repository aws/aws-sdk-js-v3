// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeSecurityGroupRulesCommand,
  DescribeSecurityGroupRulesCommandInput,
  DescribeSecurityGroupRulesCommandOutput,
} from "../commands/DescribeSecurityGroupRulesCommand";
import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeSecurityGroupRulesCommandInput,
  ...args: any
): Promise<DescribeSecurityGroupRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSecurityGroupRulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeSecurityGroupRulesCommandInput,
  ...args: any
): Promise<DescribeSecurityGroupRulesCommandOutput> => {
  // @ts-ignore
  return await client.describeSecurityGroupRules(input, ...args);
};
export async function* paginateDescribeSecurityGroupRules(
  config: EC2PaginationConfiguration,
  input: DescribeSecurityGroupRulesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSecurityGroupRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSecurityGroupRulesCommandOutput;
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
