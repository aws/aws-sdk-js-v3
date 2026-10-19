// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingClient } from "../BillingClient";
import {
  ListBusinessSupportSubscriptionHistoryCommand,
  ListBusinessSupportSubscriptionHistoryCommandInput,
  ListBusinessSupportSubscriptionHistoryCommandOutput,
} from "../commands/ListBusinessSupportSubscriptionHistoryCommand";
import type { BillingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBusinessSupportSubscriptionHistory: (
  config: BillingPaginationConfiguration,
  input: ListBusinessSupportSubscriptionHistoryCommandInput,
  ...rest: any[]
) => Paginator<ListBusinessSupportSubscriptionHistoryCommandOutput> = createPaginator<
  BillingPaginationConfiguration,
  ListBusinessSupportSubscriptionHistoryCommandInput,
  ListBusinessSupportSubscriptionHistoryCommandOutput
>(BillingClient, ListBusinessSupportSubscriptionHistoryCommand, "nextToken", "nextToken", "maxResults");
