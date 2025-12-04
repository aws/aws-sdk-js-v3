// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIAMPolicyAssignmentsForUserCommand,
  ListIAMPolicyAssignmentsForUserCommandInput,
  ListIAMPolicyAssignmentsForUserCommandOutput,
} from "../commands/ListIAMPolicyAssignmentsForUserCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIAMPolicyAssignmentsForUser: (
  config: QuickSightPaginationConfiguration,
  input: ListIAMPolicyAssignmentsForUserCommandInput,
  ...rest: any[]
) => Paginator<ListIAMPolicyAssignmentsForUserCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListIAMPolicyAssignmentsForUserCommandInput,
  ListIAMPolicyAssignmentsForUserCommandOutput
>(QuickSightClient, ListIAMPolicyAssignmentsForUserCommand, "NextToken", "NextToken", "MaxResults");
