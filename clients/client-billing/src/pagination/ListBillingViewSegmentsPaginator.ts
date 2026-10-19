// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingClient } from "../BillingClient";
import {
  ListBillingViewSegmentsCommand,
  ListBillingViewSegmentsCommandInput,
  ListBillingViewSegmentsCommandOutput,
} from "../commands/ListBillingViewSegmentsCommand";
import type { BillingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBillingViewSegments: (
  config: BillingPaginationConfiguration,
  input: ListBillingViewSegmentsCommandInput,
  ...rest: any[]
) => Paginator<ListBillingViewSegmentsCommandOutput> = createPaginator<
  BillingPaginationConfiguration,
  ListBillingViewSegmentsCommandInput,
  ListBillingViewSegmentsCommandOutput
>(BillingClient, ListBillingViewSegmentsCommand, "nextToken", "nextToken", "maxResults");
