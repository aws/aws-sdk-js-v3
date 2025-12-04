// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListDistributionTenantsByCustomizationCommand,
  ListDistributionTenantsByCustomizationCommandInput,
  ListDistributionTenantsByCustomizationCommandOutput,
} from "../commands/ListDistributionTenantsByCustomizationCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDistributionTenantsByCustomization: (
  config: CloudFrontPaginationConfiguration,
  input: ListDistributionTenantsByCustomizationCommandInput,
  ...rest: any[]
) => Paginator<ListDistributionTenantsByCustomizationCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListDistributionTenantsByCustomizationCommandInput,
  ListDistributionTenantsByCustomizationCommandOutput
>(CloudFrontClient, ListDistributionTenantsByCustomizationCommand, "Marker", "NextMarker", "MaxItems");
