// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListInvalidationsForDistributionTenantCommand,
  ListInvalidationsForDistributionTenantCommandInput,
  ListInvalidationsForDistributionTenantCommandOutput,
} from "../commands/ListInvalidationsForDistributionTenantCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvalidationsForDistributionTenant: (
  config: CloudFrontPaginationConfiguration,
  input: ListInvalidationsForDistributionTenantCommandInput,
  ...rest: any[]
) => Paginator<ListInvalidationsForDistributionTenantCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListInvalidationsForDistributionTenantCommandInput,
  ListInvalidationsForDistributionTenantCommandOutput
>(CloudFrontClient, ListInvalidationsForDistributionTenantCommand, "Marker", "InvalidationList.NextMarker", "MaxItems");
