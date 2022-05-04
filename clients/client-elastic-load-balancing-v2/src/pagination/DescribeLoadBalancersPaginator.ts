// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "../commands/DescribeLoadBalancersCommand";
import { ElasticLoadBalancingV2 } from "../ElasticLoadBalancingV2";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElasticLoadBalancingV2Client,
  input: DescribeLoadBalancersCommandInput,
  ...args: any
): Promise<DescribeLoadBalancersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeLoadBalancersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElasticLoadBalancingV2,
  input: DescribeLoadBalancersCommandInput,
  ...args: any
): Promise<DescribeLoadBalancersCommandOutput> => {
  // @ts-ignore
  return await client.describeLoadBalancers(input, ...args);
};
export async function* paginateDescribeLoadBalancers(
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeLoadBalancersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeLoadBalancersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeLoadBalancersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof ElasticLoadBalancingV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticLoadBalancingV2Client) {
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
