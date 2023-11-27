// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeTrustStoreAssociationsCommand,
  DescribeTrustStoreAssociationsCommandInput,
  DescribeTrustStoreAssociationsCommandOutput,
} from "../commands/DescribeTrustStoreAssociationsCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElasticLoadBalancingV2Client,
  input: DescribeTrustStoreAssociationsCommandInput,
  ...args: any
): Promise<DescribeTrustStoreAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTrustStoreAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeTrustStoreAssociations(
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeTrustStoreAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTrustStoreAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTrustStoreAssociationsCommandOutput;
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
