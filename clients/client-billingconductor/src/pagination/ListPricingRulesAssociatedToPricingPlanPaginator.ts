// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListPricingRulesAssociatedToPricingPlanCommand,
  ListPricingRulesAssociatedToPricingPlanCommandInput,
  ListPricingRulesAssociatedToPricingPlanCommandOutput,
} from "../commands/ListPricingRulesAssociatedToPricingPlanCommand";
import type { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPricingRulesAssociatedToPricingPlan: (
  config: BillingconductorPaginationConfiguration,
  input: ListPricingRulesAssociatedToPricingPlanCommandInput,
  ...rest: any[]
) => Paginator<ListPricingRulesAssociatedToPricingPlanCommandOutput> = createPaginator<
  BillingconductorPaginationConfiguration,
  ListPricingRulesAssociatedToPricingPlanCommandInput,
  ListPricingRulesAssociatedToPricingPlanCommandOutput
>(BillingconductorClient, ListPricingRulesAssociatedToPricingPlanCommand, "NextToken", "NextToken", "MaxResults");
