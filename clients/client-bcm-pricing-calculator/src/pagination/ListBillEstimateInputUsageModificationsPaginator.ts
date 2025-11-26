// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BCMPricingCalculatorClient } from "../BCMPricingCalculatorClient";
import {
  ListBillEstimateInputUsageModificationsCommand,
  ListBillEstimateInputUsageModificationsCommandInput,
  ListBillEstimateInputUsageModificationsCommandOutput,
} from "../commands/ListBillEstimateInputUsageModificationsCommand";
import { BCMPricingCalculatorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBillEstimateInputUsageModifications: (
  config: BCMPricingCalculatorPaginationConfiguration,
  input: ListBillEstimateInputUsageModificationsCommandInput,
  ...rest: any[]
) => Paginator<ListBillEstimateInputUsageModificationsCommandOutput> = createPaginator<
  BCMPricingCalculatorPaginationConfiguration,
  ListBillEstimateInputUsageModificationsCommandInput,
  ListBillEstimateInputUsageModificationsCommandOutput
>(BCMPricingCalculatorClient, ListBillEstimateInputUsageModificationsCommand, "nextToken", "nextToken", "maxResults");
