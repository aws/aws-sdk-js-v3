import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeInstancesCommand,
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
} from "../commands/DescribeInstancesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeInstancesCommandInput,
  ...args: any
): Promise<DescribeInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeInstancesCommandInput,
  ...args: any
): Promise<DescribeInstancesCommandOutput> => {
  // @ts-ignore
  return await client.describeInstances(input, ...args);
};
export async function* paginateDescribeInstances(
  config: EC2PaginationConfiguration,
  input: DescribeInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstancesCommandOutput;
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
