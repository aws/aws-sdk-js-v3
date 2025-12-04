// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountAssignmentDeletionStatusCommand,
  ListAccountAssignmentDeletionStatusCommandInput,
  ListAccountAssignmentDeletionStatusCommandOutput,
} from "../commands/ListAccountAssignmentDeletionStatusCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountAssignmentDeletionStatus: (
  config: SSOAdminPaginationConfiguration,
  input: ListAccountAssignmentDeletionStatusCommandInput,
  ...rest: any[]
) => Paginator<ListAccountAssignmentDeletionStatusCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListAccountAssignmentDeletionStatusCommandInput,
  ListAccountAssignmentDeletionStatusCommandOutput
>(SSOAdminClient, ListAccountAssignmentDeletionStatusCommand, "NextToken", "NextToken", "MaxResults");
