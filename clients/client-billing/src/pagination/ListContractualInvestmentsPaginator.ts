// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingClient } from "../BillingClient";
import {
  ListContractualInvestmentsCommand,
  ListContractualInvestmentsCommandInput,
  ListContractualInvestmentsCommandOutput,
} from "../commands/ListContractualInvestmentsCommand";
import type { BillingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContractualInvestments: (
  config: BillingPaginationConfiguration,
  input: ListContractualInvestmentsCommandInput,
  ...rest: any[]
) => Paginator<ListContractualInvestmentsCommandOutput> = createPaginator<
  BillingPaginationConfiguration,
  ListContractualInvestmentsCommandInput,
  ListContractualInvestmentsCommandOutput
>(BillingClient, ListContractualInvestmentsCommand, "nextToken", "nextToken", "maxResults");
