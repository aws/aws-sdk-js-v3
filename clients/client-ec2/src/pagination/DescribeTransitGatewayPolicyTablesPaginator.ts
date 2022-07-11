// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeTransitGatewayPolicyTablesCommand,
  DescribeTransitGatewayPolicyTablesCommandInput,
  DescribeTransitGatewayPolicyTablesCommandOutput,
} from "../commands/DescribeTransitGatewayPolicyTablesCommand";
import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeTransitGatewayPolicyTablesCommandInput,
  ...args: any
): Promise<DescribeTransitGatewayPolicyTablesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTransitGatewayPolicyTablesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeTransitGatewayPolicyTablesCommandInput,
  ...args: any
): Promise<DescribeTransitGatewayPolicyTablesCommandOutput> => {
  // @ts-ignore
  return await client.describeTransitGatewayPolicyTables(input, ...args);
};
export async function* paginateDescribeTransitGatewayPolicyTables(
  config: EC2PaginationConfiguration,
  input: DescribeTransitGatewayPolicyTablesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTransitGatewayPolicyTablesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTransitGatewayPolicyTablesCommandOutput;
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
