// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRevenueAttributionAllocationsCommand,
  ListRevenueAttributionAllocationsCommandInput,
  ListRevenueAttributionAllocationsCommandOutput,
} from "../commands/ListRevenueAttributionAllocationsCommand";
import { PartnerCentralRevenueMeasurementClient } from "../PartnerCentralRevenueMeasurementClient";
import type { PartnerCentralRevenueMeasurementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRevenueAttributionAllocations: (
  config: PartnerCentralRevenueMeasurementPaginationConfiguration,
  input: ListRevenueAttributionAllocationsCommandInput,
  ...rest: any[]
) => Paginator<ListRevenueAttributionAllocationsCommandOutput> = createPaginator<
  PartnerCentralRevenueMeasurementPaginationConfiguration,
  ListRevenueAttributionAllocationsCommandInput,
  ListRevenueAttributionAllocationsCommandOutput
>(PartnerCentralRevenueMeasurementClient, ListRevenueAttributionAllocationsCommand, "NextToken", "NextToken", "MaxResults");
