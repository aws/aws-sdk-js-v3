// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListPricingPlansAssociatedWithPricingRuleCommand,
  ListPricingPlansAssociatedWithPricingRuleCommandInput,
  ListPricingPlansAssociatedWithPricingRuleCommandOutput,
} from "../commands/ListPricingPlansAssociatedWithPricingRuleCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPricingPlansAssociatedWithPricingRule: (
  config: BillingconductorPaginationConfiguration,
  input: ListPricingPlansAssociatedWithPricingRuleCommandInput,
  ...rest: any[]
) => Paginator<ListPricingPlansAssociatedWithPricingRuleCommandOutput> = createPaginator<
  BillingconductorPaginationConfiguration,
  ListPricingPlansAssociatedWithPricingRuleCommandInput,
  ListPricingPlansAssociatedWithPricingRuleCommandOutput
>(BillingconductorClient, ListPricingPlansAssociatedWithPricingRuleCommand, "NextToken", "NextToken", "MaxResults");
