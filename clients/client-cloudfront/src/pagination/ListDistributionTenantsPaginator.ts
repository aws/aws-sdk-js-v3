// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListDistributionTenantsCommand,
  ListDistributionTenantsCommandInput,
  ListDistributionTenantsCommandOutput,
} from "../commands/ListDistributionTenantsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDistributionTenants: (
  config: CloudFrontPaginationConfiguration,
  input: ListDistributionTenantsCommandInput,
  ...rest: any[]
) => Paginator<ListDistributionTenantsCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListDistributionTenantsCommandInput,
  ListDistributionTenantsCommandOutput
>(CloudFrontClient, ListDistributionTenantsCommand, "Marker", "NextMarker", "MaxItems");
