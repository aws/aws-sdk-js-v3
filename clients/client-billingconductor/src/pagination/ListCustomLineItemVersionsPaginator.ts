// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListCustomLineItemVersionsCommand,
  ListCustomLineItemVersionsCommandInput,
  ListCustomLineItemVersionsCommandOutput,
} from "../commands/ListCustomLineItemVersionsCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomLineItemVersions: (
  config: BillingconductorPaginationConfiguration,
  input: ListCustomLineItemVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomLineItemVersionsCommandOutput> = createPaginator<
  BillingconductorPaginationConfiguration,
  ListCustomLineItemVersionsCommandInput,
  ListCustomLineItemVersionsCommandOutput
>(BillingconductorClient, ListCustomLineItemVersionsCommand, "NextToken", "NextToken", "MaxResults");
