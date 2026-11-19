// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEngagementGroupsCommand,
  ListEngagementGroupsCommandInput,
  ListEngagementGroupsCommandOutput,
} from "../commands/ListEngagementGroupsCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import type { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEngagementGroups: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListEngagementGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListEngagementGroupsCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListEngagementGroupsCommandInput,
  ListEngagementGroupsCommandOutput
>(PartnerCentralSellingClient, ListEngagementGroupsCommand, "NextToken", "NextToken", "MaxResults");
