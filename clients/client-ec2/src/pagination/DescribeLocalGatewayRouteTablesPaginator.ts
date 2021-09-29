import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeLocalGatewayRouteTablesCommand,
  DescribeLocalGatewayRouteTablesCommandInput,
  DescribeLocalGatewayRouteTablesCommandOutput,
} from "../commands/DescribeLocalGatewayRouteTablesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeLocalGatewayRouteTablesCommandInput,
  ...args: any
): Promise<DescribeLocalGatewayRouteTablesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeLocalGatewayRouteTablesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeLocalGatewayRouteTablesCommandInput,
  ...args: any
): Promise<DescribeLocalGatewayRouteTablesCommandOutput> => {
  // @ts-ignore
  return await client.describeLocalGatewayRouteTables(input, ...args);
};
export async function* paginateDescribeLocalGatewayRouteTables(
  config: EC2PaginationConfiguration,
  input: DescribeLocalGatewayRouteTablesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeLocalGatewayRouteTablesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeLocalGatewayRouteTablesCommandOutput;
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
