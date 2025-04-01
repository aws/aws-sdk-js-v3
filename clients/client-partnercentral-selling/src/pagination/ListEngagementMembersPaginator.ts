// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListEngagementMembersCommand,
  ListEngagementMembersCommandInput,
  ListEngagementMembersCommandOutput,
} from "../commands/ListEngagementMembersCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEngagementMembers: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListEngagementMembersCommandInput,
  ...rest: any[]
) => Paginator<ListEngagementMembersCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListEngagementMembersCommandInput,
  ListEngagementMembersCommandOutput
>(PartnerCentralSellingClient, ListEngagementMembersCommand, "NextToken", "NextToken", "MaxResults");
