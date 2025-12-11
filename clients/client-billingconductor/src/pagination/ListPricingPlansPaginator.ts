// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListPricingPlansCommand,
  ListPricingPlansCommandInput,
  ListPricingPlansCommandOutput,
} from "../commands/ListPricingPlansCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPricingPlans: (
  config: BillingconductorPaginationConfiguration,
  input: ListPricingPlansCommandInput,
  ...rest: any[]
) => Paginator<ListPricingPlansCommandOutput> = createPaginator<
  BillingconductorPaginationConfiguration,
  ListPricingPlansCommandInput,
  ListPricingPlansCommandOutput
>(BillingconductorClient, ListPricingPlansCommand, "NextToken", "NextToken", "MaxResults");
