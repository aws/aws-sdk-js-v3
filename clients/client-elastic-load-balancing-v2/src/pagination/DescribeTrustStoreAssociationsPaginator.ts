// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTrustStoreAssociationsCommand,
  DescribeTrustStoreAssociationsCommandInput,
  DescribeTrustStoreAssociationsCommandOutput,
} from "../commands/DescribeTrustStoreAssociationsCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTrustStoreAssociations: (
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeTrustStoreAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTrustStoreAssociationsCommandOutput> = createPaginator<
  ElasticLoadBalancingV2PaginationConfiguration,
  DescribeTrustStoreAssociationsCommandInput,
  DescribeTrustStoreAssociationsCommandOutput
>(ElasticLoadBalancingV2Client, DescribeTrustStoreAssociationsCommand, "Marker", "NextMarker", "PageSize");
