// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListApprovalTeamsCommand,
  ListApprovalTeamsCommandInput,
  ListApprovalTeamsCommandOutput,
} from "../commands/ListApprovalTeamsCommand";
import { MPAClient } from "../MPAClient";
import { MPAPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApprovalTeams: (
  config: MPAPaginationConfiguration,
  input: ListApprovalTeamsCommandInput,
  ...rest: any[]
) => Paginator<ListApprovalTeamsCommandOutput> = createPaginator<
  MPAPaginationConfiguration,
  ListApprovalTeamsCommandInput,
  ListApprovalTeamsCommandOutput
>(MPAClient, ListApprovalTeamsCommand, "NextToken", "NextToken", "MaxResults");
