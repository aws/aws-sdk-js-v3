import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeVpcEndpointServiceConfigurationsCommand,
  DescribeVpcEndpointServiceConfigurationsCommandInput,
  DescribeVpcEndpointServiceConfigurationsCommandOutput,
} from "../commands/DescribeVpcEndpointServiceConfigurationsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeVpcEndpointServiceConfigurationsCommandInput,
  ...args: any
): Promise<DescribeVpcEndpointServiceConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeVpcEndpointServiceConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeVpcEndpointServiceConfigurationsCommandInput,
  ...args: any
): Promise<DescribeVpcEndpointServiceConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.describeVpcEndpointServiceConfigurations(input, ...args);
};
export async function* paginateDescribeVpcEndpointServiceConfigurations(
  config: EC2PaginationConfiguration,
  input: DescribeVpcEndpointServiceConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeVpcEndpointServiceConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeVpcEndpointServiceConfigurationsCommandOutput;
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
