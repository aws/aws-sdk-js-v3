// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeTargetGroupsCommand,
  DescribeTargetGroupsCommandInput,
  DescribeTargetGroupsCommandOutput,
} from "../commands/DescribeTargetGroupsCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElasticLoadBalancingV2Client,
  input: DescribeTargetGroupsCommandInput,
  ...args: any
): Promise<DescribeTargetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTargetGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeTargetGroups(
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeTargetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTargetGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTargetGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof ElasticLoadBalancingV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticLoadBalancingV2 | ElasticLoadBalancingV2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
