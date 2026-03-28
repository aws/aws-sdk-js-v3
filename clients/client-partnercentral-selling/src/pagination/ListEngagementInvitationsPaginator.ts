// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEngagementInvitationsCommand,
  ListEngagementInvitationsCommandInput,
  ListEngagementInvitationsCommandOutput,
} from "../commands/ListEngagementInvitationsCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import type { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEngagementInvitations: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListEngagementInvitationsCommandInput,
  ...rest: any[]
) => Paginator<ListEngagementInvitationsCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListEngagementInvitationsCommandInput,
  ListEngagementInvitationsCommandOutput
>(PartnerCentralSellingClient, ListEngagementInvitationsCommand, "NextToken", "NextToken", "MaxResults");
