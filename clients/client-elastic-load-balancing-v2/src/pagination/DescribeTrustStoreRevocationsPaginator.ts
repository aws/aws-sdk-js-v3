// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTrustStoreRevocationsCommand,
  DescribeTrustStoreRevocationsCommandInput,
  DescribeTrustStoreRevocationsCommandOutput,
} from "../commands/DescribeTrustStoreRevocationsCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTrustStoreRevocations: (
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeTrustStoreRevocationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTrustStoreRevocationsCommandOutput> = createPaginator<
  ElasticLoadBalancingV2PaginationConfiguration,
  DescribeTrustStoreRevocationsCommandInput,
  DescribeTrustStoreRevocationsCommandOutput
>(ElasticLoadBalancingV2Client, DescribeTrustStoreRevocationsCommand, "Marker", "NextMarker", "PageSize");
