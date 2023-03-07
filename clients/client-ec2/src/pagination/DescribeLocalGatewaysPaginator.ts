// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeLocalGatewaysCommand,
  DescribeLocalGatewaysCommandInput,
  DescribeLocalGatewaysCommandOutput,
} from "../commands/DescribeLocalGatewaysCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeLocalGatewaysCommandInput,
  ...args: any
): Promise<DescribeLocalGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeLocalGatewaysCommand(input), ...args);
};
export async function* paginateDescribeLocalGateways(
  config: EC2PaginationConfiguration,
  input: DescribeLocalGatewaysCommandInput,
  ...additionalArguments: any
): Paginator<DescribeLocalGatewaysCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeLocalGatewaysCommandOutput;
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
