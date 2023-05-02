// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeTransitGatewayRouteTableAnnouncementsCommand,
  DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
  DescribeTransitGatewayRouteTableAnnouncementsCommandOutput,
} from "../commands/DescribeTransitGatewayRouteTableAnnouncementsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
  ...args: any
): Promise<DescribeTransitGatewayRouteTableAnnouncementsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTransitGatewayRouteTableAnnouncementsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeTransitGatewayRouteTableAnnouncements(
  config: EC2PaginationConfiguration,
  input: DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTransitGatewayRouteTableAnnouncementsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTransitGatewayRouteTableAnnouncementsCommandOutput;
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
