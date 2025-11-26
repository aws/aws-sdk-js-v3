// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingClient } from "../BillingClient";
import {
  ListBillingViewsCommand,
  ListBillingViewsCommandInput,
  ListBillingViewsCommandOutput,
} from "../commands/ListBillingViewsCommand";
import { BillingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBillingViews: (
  config: BillingPaginationConfiguration,
  input: ListBillingViewsCommandInput,
  ...rest: any[]
) => Paginator<ListBillingViewsCommandOutput> = createPaginator<
  BillingPaginationConfiguration,
  ListBillingViewsCommandInput,
  ListBillingViewsCommandOutput
>(BillingClient, ListBillingViewsCommand, "nextToken", "nextToken", "maxResults");
