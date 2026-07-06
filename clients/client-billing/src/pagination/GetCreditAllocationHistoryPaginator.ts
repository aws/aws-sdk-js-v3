// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingClient } from "../BillingClient";
import {
  GetCreditAllocationHistoryCommand,
  GetCreditAllocationHistoryCommandInput,
  GetCreditAllocationHistoryCommandOutput,
} from "../commands/GetCreditAllocationHistoryCommand";
import type { BillingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCreditAllocationHistory: (
  config: BillingPaginationConfiguration,
  input: GetCreditAllocationHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetCreditAllocationHistoryCommandOutput> = createPaginator<
  BillingPaginationConfiguration,
  GetCreditAllocationHistoryCommandInput,
  GetCreditAllocationHistoryCommandOutput
>(BillingClient, GetCreditAllocationHistoryCommand, "nextToken", "nextToken", "maxResults");
