// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListBillingGroupsCommand,
  ListBillingGroupsCommandInput,
  ListBillingGroupsCommandOutput,
} from "../commands/ListBillingGroupsCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBillingGroups: (
  config: BillingconductorPaginationConfiguration,
  input: ListBillingGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListBillingGroupsCommandOutput> = createPaginator<
  BillingconductorPaginationConfiguration,
  ListBillingGroupsCommandInput,
  ListBillingGroupsCommandOutput
>(BillingconductorClient, ListBillingGroupsCommand, "NextToken", "NextToken", "MaxResults");
