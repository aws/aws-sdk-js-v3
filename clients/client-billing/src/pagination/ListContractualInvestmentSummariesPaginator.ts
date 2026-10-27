// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingClient } from "../BillingClient";
import {
  ListContractualInvestmentSummariesCommand,
  ListContractualInvestmentSummariesCommandInput,
  ListContractualInvestmentSummariesCommandOutput,
} from "../commands/ListContractualInvestmentSummariesCommand";
import type { BillingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContractualInvestmentSummaries: (
  config: BillingPaginationConfiguration,
  input: ListContractualInvestmentSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListContractualInvestmentSummariesCommandOutput> = createPaginator<
  BillingPaginationConfiguration,
  ListContractualInvestmentSummariesCommandInput,
  ListContractualInvestmentSummariesCommandOutput
>(BillingClient, ListContractualInvestmentSummariesCommand, "nextToken", "nextToken", "maxResults");
