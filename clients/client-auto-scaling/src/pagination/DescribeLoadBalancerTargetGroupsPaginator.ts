// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeLoadBalancerTargetGroupsCommand,
  DescribeLoadBalancerTargetGroupsCommandInput,
  DescribeLoadBalancerTargetGroupsCommandOutput,
} from "../commands/DescribeLoadBalancerTargetGroupsCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribeLoadBalancerTargetGroupsCommandInput,
  ...args: any
): Promise<DescribeLoadBalancerTargetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeLoadBalancerTargetGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeLoadBalancerTargetGroups(
  config: AutoScalingPaginationConfiguration,
  input: DescribeLoadBalancerTargetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeLoadBalancerTargetGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeLoadBalancerTargetGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof AutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AutoScaling | AutoScalingClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
