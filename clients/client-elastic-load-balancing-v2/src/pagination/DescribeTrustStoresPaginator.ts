// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTrustStoresCommand,
  DescribeTrustStoresCommandInput,
  DescribeTrustStoresCommandOutput,
} from "../commands/DescribeTrustStoresCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTrustStores: (
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeTrustStoresCommandInput,
  ...rest: any[]
) => Paginator<DescribeTrustStoresCommandOutput> = createPaginator<
  ElasticLoadBalancingV2PaginationConfiguration,
  DescribeTrustStoresCommandInput,
  DescribeTrustStoresCommandOutput
>(ElasticLoadBalancingV2Client, DescribeTrustStoresCommand, "Marker", "NextMarker", "PageSize");
