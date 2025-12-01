// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BCMPricingCalculatorClient } from "../BCMPricingCalculatorClient";
import {
  ListBillEstimateLineItemsCommand,
  ListBillEstimateLineItemsCommandInput,
  ListBillEstimateLineItemsCommandOutput,
} from "../commands/ListBillEstimateLineItemsCommand";
import { BCMPricingCalculatorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBillEstimateLineItems: (
  config: BCMPricingCalculatorPaginationConfiguration,
  input: ListBillEstimateLineItemsCommandInput,
  ...rest: any[]
) => Paginator<ListBillEstimateLineItemsCommandOutput> = createPaginator<
  BCMPricingCalculatorPaginationConfiguration,
  ListBillEstimateLineItemsCommandInput,
  ListBillEstimateLineItemsCommandOutput
>(BCMPricingCalculatorClient, ListBillEstimateLineItemsCommand, "nextToken", "nextToken", "maxResults");
