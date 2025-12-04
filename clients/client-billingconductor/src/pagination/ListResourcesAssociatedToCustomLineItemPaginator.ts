// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListResourcesAssociatedToCustomLineItemCommand,
  ListResourcesAssociatedToCustomLineItemCommandInput,
  ListResourcesAssociatedToCustomLineItemCommandOutput,
} from "../commands/ListResourcesAssociatedToCustomLineItemCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourcesAssociatedToCustomLineItem: (
  config: BillingconductorPaginationConfiguration,
  input: ListResourcesAssociatedToCustomLineItemCommandInput,
  ...rest: any[]
) => Paginator<ListResourcesAssociatedToCustomLineItemCommandOutput> = createPaginator<
  BillingconductorPaginationConfiguration,
  ListResourcesAssociatedToCustomLineItemCommandInput,
  ListResourcesAssociatedToCustomLineItemCommandOutput
>(BillingconductorClient, ListResourcesAssociatedToCustomLineItemCommand, "NextToken", "NextToken", "MaxResults");
