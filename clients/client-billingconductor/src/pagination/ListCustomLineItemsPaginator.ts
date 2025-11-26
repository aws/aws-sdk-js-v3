// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListCustomLineItemsCommand,
  ListCustomLineItemsCommandInput,
  ListCustomLineItemsCommandOutput,
} from "../commands/ListCustomLineItemsCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomLineItems: (
  config: BillingconductorPaginationConfiguration,
  input: ListCustomLineItemsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomLineItemsCommandOutput> = createPaginator<
  BillingconductorPaginationConfiguration,
  ListCustomLineItemsCommandInput,
  ListCustomLineItemsCommandOutput
>(BillingconductorClient, ListCustomLineItemsCommand, "NextToken", "NextToken", "MaxResults");
