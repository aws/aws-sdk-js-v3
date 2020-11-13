import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeClientVpnRoutesCommand,
  DescribeClientVpnRoutesCommandInput,
  DescribeClientVpnRoutesCommandOutput,
} from "../commands/DescribeClientVpnRoutesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeClientVpnRoutesCommandInput,
  ...args: any
): Promise<DescribeClientVpnRoutesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClientVpnRoutesCommand(input), ...args);
};
const makePagedRequest = async (
  client: EC2,
  input: DescribeClientVpnRoutesCommandInput,
  ...args: any
): Promise<DescribeClientVpnRoutesCommandOutput> => {
  // @ts-ignore
  return await client.describeClientVpnRoutes(input, ...args);
};
export async function* describeClientVpnRoutesPaginate(
  config: EC2PaginationConfiguration,
  input: DescribeClientVpnRoutesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClientVpnRoutesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClientVpnRoutesCommandOutput;
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
