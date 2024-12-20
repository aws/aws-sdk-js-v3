// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BillingClient } from "../BillingClient";
import {
  ListSourceViewsForBillingViewCommand,
  ListSourceViewsForBillingViewCommandInput,
  ListSourceViewsForBillingViewCommandOutput,
} from "../commands/ListSourceViewsForBillingViewCommand";
import { BillingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSourceViewsForBillingView: (
  config: BillingPaginationConfiguration,
  input: ListSourceViewsForBillingViewCommandInput,
  ...rest: any[]
) => Paginator<ListSourceViewsForBillingViewCommandOutput> = createPaginator<
  BillingPaginationConfiguration,
  ListSourceViewsForBillingViewCommandInput,
  ListSourceViewsForBillingViewCommandOutput
>(BillingClient, ListSourceViewsForBillingViewCommand, "nextToken", "nextToken", "maxResults");
