// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeTrustStoreRevocationsCommand,
  DescribeTrustStoreRevocationsCommandInput,
  DescribeTrustStoreRevocationsCommandOutput,
} from "../commands/DescribeTrustStoreRevocationsCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElasticLoadBalancingV2Client,
  input: DescribeTrustStoreRevocationsCommandInput,
  ...args: any
): Promise<DescribeTrustStoreRevocationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTrustStoreRevocationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeTrustStoreRevocations(
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeTrustStoreRevocationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTrustStoreRevocationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTrustStoreRevocationsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["PageSize"] = config.pageSize;
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
