// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListPricingRulesCommand,
  ListPricingRulesCommandInput,
  ListPricingRulesCommandOutput,
} from "../commands/ListPricingRulesCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPricingRules: (
  config: BillingconductorPaginationConfiguration,
  input: ListPricingRulesCommandInput,
  ...rest: any[]
) => Paginator<ListPricingRulesCommandOutput> = createPaginator<
  BillingconductorPaginationConfiguration,
  ListPricingRulesCommandInput,
  ListPricingRulesCommandOutput
>(BillingconductorClient, ListPricingRulesCommand, "NextToken", "NextToken", "MaxResults");
