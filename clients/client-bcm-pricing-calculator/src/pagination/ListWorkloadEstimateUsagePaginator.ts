// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BCMPricingCalculatorClient } from "../BCMPricingCalculatorClient";
import {
  ListWorkloadEstimateUsageCommand,
  ListWorkloadEstimateUsageCommandInput,
  ListWorkloadEstimateUsageCommandOutput,
} from "../commands/ListWorkloadEstimateUsageCommand";
import { BCMPricingCalculatorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkloadEstimateUsage: (
  config: BCMPricingCalculatorPaginationConfiguration,
  input: ListWorkloadEstimateUsageCommandInput,
  ...rest: any[]
) => Paginator<ListWorkloadEstimateUsageCommandOutput> = createPaginator<
  BCMPricingCalculatorPaginationConfiguration,
  ListWorkloadEstimateUsageCommandInput,
  ListWorkloadEstimateUsageCommandOutput
>(BCMPricingCalculatorClient, ListWorkloadEstimateUsageCommand, "nextToken", "nextToken", "maxResults");
