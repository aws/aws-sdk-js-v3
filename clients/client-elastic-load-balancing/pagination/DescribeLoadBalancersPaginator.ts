import { ElasticLoadBalancing } from "../ElasticLoadBalancing";
import { ElasticLoadBalancingClient } from "../ElasticLoadBalancingClient";
import {
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "../commands/DescribeLoadBalancersCommand";
import { ElasticLoadBalancingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElasticLoadBalancingClient,
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
  client: ElasticLoadBalancing,
  input: DescribeLoadBalancersCommandInput,
  ...args: any
): Promise<DescribeLoadBalancersCommandOutput> => {
  // @ts-ignore
  return await client.describeLoadBalancers(input, ...args);
};
export async function* paginateDescribeLoadBalancers(
  config: ElasticLoadBalancingPaginationConfiguration,
  input: DescribeLoadBalancersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeLoadBalancersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeLoadBalancersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof ElasticLoadBalancing) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticLoadBalancingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticLoadBalancing | ElasticLoadBalancingClient");
    }
    yield page;
    token = page.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
