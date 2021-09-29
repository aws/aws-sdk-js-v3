import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeCarrierGatewaysCommand,
  DescribeCarrierGatewaysCommandInput,
  DescribeCarrierGatewaysCommandOutput,
} from "../commands/DescribeCarrierGatewaysCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeCarrierGatewaysCommandInput,
  ...args: any
): Promise<DescribeCarrierGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCarrierGatewaysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeCarrierGatewaysCommandInput,
  ...args: any
): Promise<DescribeCarrierGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.describeCarrierGateways(input, ...args);
};
export async function* paginateDescribeCarrierGateways(
  config: EC2PaginationConfiguration,
  input: DescribeCarrierGatewaysCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCarrierGatewaysCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCarrierGatewaysCommandOutput;
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
