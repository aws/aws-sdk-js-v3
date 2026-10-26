// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingClient } from "../BillingClient";
import {
  ListContractsCommand,
  ListContractsCommandInput,
  ListContractsCommandOutput,
} from "../commands/ListContractsCommand";
import type { BillingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContracts: (
  config: BillingPaginationConfiguration,
  input: ListContractsCommandInput,
  ...rest: any[]
) => Paginator<ListContractsCommandOutput> = createPaginator<
  BillingPaginationConfiguration,
  ListContractsCommandInput,
  ListContractsCommandOutput
>(BillingClient, ListContractsCommand, "nextToken", "nextToken", "maxResults");
