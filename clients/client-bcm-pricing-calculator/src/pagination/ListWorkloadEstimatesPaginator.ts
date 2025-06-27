// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BCMPricingCalculatorClient } from "../BCMPricingCalculatorClient";
import {
  ListWorkloadEstimatesCommand,
  ListWorkloadEstimatesCommandInput,
  ListWorkloadEstimatesCommandOutput,
} from "../commands/ListWorkloadEstimatesCommand";
import { BCMPricingCalculatorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkloadEstimates: (
  config: BCMPricingCalculatorPaginationConfiguration,
  input: ListWorkloadEstimatesCommandInput,
  ...rest: any[]
) => Paginator<ListWorkloadEstimatesCommandOutput> = createPaginator<
  BCMPricingCalculatorPaginationConfiguration,
  ListWorkloadEstimatesCommandInput,
  ListWorkloadEstimatesCommandOutput
>(BCMPricingCalculatorClient, ListWorkloadEstimatesCommand, "nextToken", "nextToken", "maxResults");
