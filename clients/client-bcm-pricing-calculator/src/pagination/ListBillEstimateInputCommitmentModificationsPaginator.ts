// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BCMPricingCalculatorClient } from "../BCMPricingCalculatorClient";
import {
  ListBillEstimateInputCommitmentModificationsCommand,
  ListBillEstimateInputCommitmentModificationsCommandInput,
  ListBillEstimateInputCommitmentModificationsCommandOutput,
} from "../commands/ListBillEstimateInputCommitmentModificationsCommand";
import { BCMPricingCalculatorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBillEstimateInputCommitmentModifications: (
  config: BCMPricingCalculatorPaginationConfiguration,
  input: ListBillEstimateInputCommitmentModificationsCommandInput,
  ...rest: any[]
) => Paginator<ListBillEstimateInputCommitmentModificationsCommandOutput> = createPaginator<
  BCMPricingCalculatorPaginationConfiguration,
  ListBillEstimateInputCommitmentModificationsCommandInput,
  ListBillEstimateInputCommitmentModificationsCommandOutput
>(
  BCMPricingCalculatorClient,
  ListBillEstimateInputCommitmentModificationsCommand,
  "nextToken",
  "nextToken",
  "maxResults"
);
