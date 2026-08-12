// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApprovalPoliciesCommand,
  ListApprovalPoliciesCommandInput,
  ListApprovalPoliciesCommandOutput,
} from "../commands/ListApprovalPoliciesCommand";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApprovalPolicies: (
  config: QuickSightPaginationConfiguration,
  input: ListApprovalPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListApprovalPoliciesCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListApprovalPoliciesCommandInput,
  ListApprovalPoliciesCommandOutput
>(QuickSightClient, ListApprovalPoliciesCommand, "NextToken", "NextToken", "MaxResults");
