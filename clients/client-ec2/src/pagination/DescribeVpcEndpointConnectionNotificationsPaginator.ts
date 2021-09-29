import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeVpcEndpointConnectionNotificationsCommand,
  DescribeVpcEndpointConnectionNotificationsCommandInput,
  DescribeVpcEndpointConnectionNotificationsCommandOutput,
} from "../commands/DescribeVpcEndpointConnectionNotificationsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeVpcEndpointConnectionNotificationsCommandInput,
  ...args: any
): Promise<DescribeVpcEndpointConnectionNotificationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeVpcEndpointConnectionNotificationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeVpcEndpointConnectionNotificationsCommandInput,
  ...args: any
): Promise<DescribeVpcEndpointConnectionNotificationsCommandOutput> => {
  // @ts-ignore
  return await client.describeVpcEndpointConnectionNotifications(input, ...args);
};
export async function* paginateDescribeVpcEndpointConnectionNotifications(
  config: EC2PaginationConfiguration,
  input: DescribeVpcEndpointConnectionNotificationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeVpcEndpointConnectionNotificationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeVpcEndpointConnectionNotificationsCommandOutput;
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
