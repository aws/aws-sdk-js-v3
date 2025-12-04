// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BCMPricingCalculatorClient } from "../BCMPricingCalculatorClient";
import {
  ListBillEstimateCommitmentsCommand,
  ListBillEstimateCommitmentsCommandInput,
  ListBillEstimateCommitmentsCommandOutput,
} from "../commands/ListBillEstimateCommitmentsCommand";
import { BCMPricingCalculatorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBillEstimateCommitments: (
  config: BCMPricingCalculatorPaginationConfiguration,
  input: ListBillEstimateCommitmentsCommandInput,
  ...rest: any[]
) => Paginator<ListBillEstimateCommitmentsCommandOutput> = createPaginator<
  BCMPricingCalculatorPaginationConfiguration,
  ListBillEstimateCommitmentsCommandInput,
  ListBillEstimateCommitmentsCommandOutput
>(BCMPricingCalculatorClient, ListBillEstimateCommitmentsCommand, "nextToken", "nextToken", "maxResults");
