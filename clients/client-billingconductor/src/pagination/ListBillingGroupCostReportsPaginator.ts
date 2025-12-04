// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListBillingGroupCostReportsCommand,
  ListBillingGroupCostReportsCommandInput,
  ListBillingGroupCostReportsCommandOutput,
} from "../commands/ListBillingGroupCostReportsCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBillingGroupCostReports: (
  config: BillingconductorPaginationConfiguration,
  input: ListBillingGroupCostReportsCommandInput,
  ...rest: any[]
) => Paginator<ListBillingGroupCostReportsCommandOutput> = createPaginator<
  BillingconductorPaginationConfiguration,
  ListBillingGroupCostReportsCommandInput,
  ListBillingGroupCostReportsCommandOutput
>(BillingconductorClient, ListBillingGroupCostReportsCommand, "NextToken", "NextToken", "MaxResults");
