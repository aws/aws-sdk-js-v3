// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIAMPolicyAssignmentsCommand,
  ListIAMPolicyAssignmentsCommandInput,
  ListIAMPolicyAssignmentsCommandOutput,
} from "../commands/ListIAMPolicyAssignmentsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIAMPolicyAssignments: (
  config: QuickSightPaginationConfiguration,
  input: ListIAMPolicyAssignmentsCommandInput,
  ...rest: any[]
) => Paginator<ListIAMPolicyAssignmentsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListIAMPolicyAssignmentsCommandInput,
  ListIAMPolicyAssignmentsCommandOutput
>(QuickSightClient, ListIAMPolicyAssignmentsCommand, "NextToken", "NextToken", "MaxResults");
