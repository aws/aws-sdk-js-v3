// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingClient } from "../BillingClient";
import {
  ListContractualInvestmentAttestationsCommand,
  ListContractualInvestmentAttestationsCommandInput,
  ListContractualInvestmentAttestationsCommandOutput,
} from "../commands/ListContractualInvestmentAttestationsCommand";
import type { BillingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContractualInvestmentAttestations: (
  config: BillingPaginationConfiguration,
  input: ListContractualInvestmentAttestationsCommandInput,
  ...rest: any[]
) => Paginator<ListContractualInvestmentAttestationsCommandOutput> = createPaginator<
  BillingPaginationConfiguration,
  ListContractualInvestmentAttestationsCommandInput,
  ListContractualInvestmentAttestationsCommandOutput
>(BillingClient, ListContractualInvestmentAttestationsCommand, "nextToken", "nextToken", "maxResults");
