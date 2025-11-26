// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListAccountAssociationsCommand,
  ListAccountAssociationsCommandInput,
  ListAccountAssociationsCommandOutput,
} from "../commands/ListAccountAssociationsCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountAssociations: (
  config: BillingconductorPaginationConfiguration,
  input: ListAccountAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListAccountAssociationsCommandOutput> = createPaginator<
  BillingconductorPaginationConfiguration,
  ListAccountAssociationsCommandInput,
  ListAccountAssociationsCommandOutput
>(BillingconductorClient, ListAccountAssociationsCommand, "NextToken", "NextToken", "");
