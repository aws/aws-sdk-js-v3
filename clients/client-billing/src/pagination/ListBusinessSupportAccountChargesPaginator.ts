// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingClient } from "../BillingClient";
import {
  ListBusinessSupportAccountChargesCommand,
  ListBusinessSupportAccountChargesCommandInput,
  ListBusinessSupportAccountChargesCommandOutput,
} from "../commands/ListBusinessSupportAccountChargesCommand";
import type { BillingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBusinessSupportAccountCharges: (
  config: BillingPaginationConfiguration,
  input: ListBusinessSupportAccountChargesCommandInput,
  ...rest: any[]
) => Paginator<ListBusinessSupportAccountChargesCommandOutput> = createPaginator<
  BillingPaginationConfiguration,
  ListBusinessSupportAccountChargesCommandInput,
  ListBusinessSupportAccountChargesCommandOutput
>(BillingClient, ListBusinessSupportAccountChargesCommand, "nextToken", "nextToken", "maxResults");
