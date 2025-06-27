// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BCMPricingCalculatorClient } from "../BCMPricingCalculatorClient";
import {
  ListBillScenarioCommitmentModificationsCommand,
  ListBillScenarioCommitmentModificationsCommandInput,
  ListBillScenarioCommitmentModificationsCommandOutput,
} from "../commands/ListBillScenarioCommitmentModificationsCommand";
import { BCMPricingCalculatorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBillScenarioCommitmentModifications: (
  config: BCMPricingCalculatorPaginationConfiguration,
  input: ListBillScenarioCommitmentModificationsCommandInput,
  ...rest: any[]
) => Paginator<ListBillScenarioCommitmentModificationsCommandOutput> = createPaginator<
  BCMPricingCalculatorPaginationConfiguration,
  ListBillScenarioCommitmentModificationsCommandInput,
  ListBillScenarioCommitmentModificationsCommandOutput
>(BCMPricingCalculatorClient, ListBillScenarioCommitmentModificationsCommand, "nextToken", "nextToken", "maxResults");
