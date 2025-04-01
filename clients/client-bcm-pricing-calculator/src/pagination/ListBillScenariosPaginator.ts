// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BCMPricingCalculatorClient } from "../BCMPricingCalculatorClient";
import {
  ListBillScenariosCommand,
  ListBillScenariosCommandInput,
  ListBillScenariosCommandOutput,
} from "../commands/ListBillScenariosCommand";
import { BCMPricingCalculatorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBillScenarios: (
  config: BCMPricingCalculatorPaginationConfiguration,
  input: ListBillScenariosCommandInput,
  ...rest: any[]
) => Paginator<ListBillScenariosCommandOutput> = createPaginator<
  BCMPricingCalculatorPaginationConfiguration,
  ListBillScenariosCommandInput,
  ListBillScenariosCommandOutput
>(BCMPricingCalculatorClient, ListBillScenariosCommand, "nextToken", "nextToken", "maxResults");
