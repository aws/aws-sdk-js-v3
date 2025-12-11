// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BCMPricingCalculatorClient } from "../BCMPricingCalculatorClient";
import {
  ListBillEstimatesCommand,
  ListBillEstimatesCommandInput,
  ListBillEstimatesCommandOutput,
} from "../commands/ListBillEstimatesCommand";
import { BCMPricingCalculatorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBillEstimates: (
  config: BCMPricingCalculatorPaginationConfiguration,
  input: ListBillEstimatesCommandInput,
  ...rest: any[]
) => Paginator<ListBillEstimatesCommandOutput> = createPaginator<
  BCMPricingCalculatorPaginationConfiguration,
  ListBillEstimatesCommandInput,
  ListBillEstimatesCommandOutput
>(BCMPricingCalculatorClient, ListBillEstimatesCommand, "nextToken", "nextToken", "maxResults");
