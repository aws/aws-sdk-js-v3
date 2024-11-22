// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BCMPricingCalculatorClient } from "../BCMPricingCalculatorClient";
import {
  ListBillScenarioUsageModificationsCommand,
  ListBillScenarioUsageModificationsCommandInput,
  ListBillScenarioUsageModificationsCommandOutput,
} from "../commands/ListBillScenarioUsageModificationsCommand";
import { BCMPricingCalculatorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBillScenarioUsageModifications: (
  config: BCMPricingCalculatorPaginationConfiguration,
  input: ListBillScenarioUsageModificationsCommandInput,
  ...rest: any[]
) => Paginator<ListBillScenarioUsageModificationsCommandOutput> = createPaginator<
  BCMPricingCalculatorPaginationConfiguration,
  ListBillScenarioUsageModificationsCommandInput,
  ListBillScenarioUsageModificationsCommandOutput
>(BCMPricingCalculatorClient, ListBillScenarioUsageModificationsCommand, "nextToken", "nextToken", "maxResults");
