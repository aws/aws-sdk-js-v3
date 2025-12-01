// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEngagementByAcceptingInvitationTasksCommand,
  ListEngagementByAcceptingInvitationTasksCommandInput,
  ListEngagementByAcceptingInvitationTasksCommandOutput,
} from "../commands/ListEngagementByAcceptingInvitationTasksCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEngagementByAcceptingInvitationTasks: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListEngagementByAcceptingInvitationTasksCommandInput,
  ...rest: any[]
) => Paginator<ListEngagementByAcceptingInvitationTasksCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListEngagementByAcceptingInvitationTasksCommandInput,
  ListEngagementByAcceptingInvitationTasksCommandOutput
>(PartnerCentralSellingClient, ListEngagementByAcceptingInvitationTasksCommand, "NextToken", "NextToken", "MaxResults");
