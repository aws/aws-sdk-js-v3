// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRevenueAttributionsCommand,
  ListRevenueAttributionsCommandInput,
  ListRevenueAttributionsCommandOutput,
} from "../commands/ListRevenueAttributionsCommand";
import { PartnerCentralRevenueMeasurementClient } from "../PartnerCentralRevenueMeasurementClient";
import type { PartnerCentralRevenueMeasurementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRevenueAttributions: (
  config: PartnerCentralRevenueMeasurementPaginationConfiguration,
  input: ListRevenueAttributionsCommandInput,
  ...rest: any[]
) => Paginator<ListRevenueAttributionsCommandOutput> = createPaginator<
  PartnerCentralRevenueMeasurementPaginationConfiguration,
  ListRevenueAttributionsCommandInput,
  ListRevenueAttributionsCommandOutput
>(PartnerCentralRevenueMeasurementClient, ListRevenueAttributionsCommand, "NextToken", "NextToken", "MaxResults");
