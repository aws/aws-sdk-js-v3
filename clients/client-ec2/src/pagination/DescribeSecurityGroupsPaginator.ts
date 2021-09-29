import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeSecurityGroupsCommand,
  DescribeSecurityGroupsCommandInput,
  DescribeSecurityGroupsCommandOutput,
} from "../commands/DescribeSecurityGroupsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeSecurityGroupsCommandInput,
  ...args: any
): Promise<DescribeSecurityGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSecurityGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeSecurityGroupsCommandInput,
  ...args: any
): Promise<DescribeSecurityGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeSecurityGroups(input, ...args);
};
export async function* paginateDescribeSecurityGroups(
  config: EC2PaginationConfiguration,
  input: DescribeSecurityGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSecurityGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSecurityGroupsCommandOutput;
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
