// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountAssignmentCreationStatusCommand,
  ListAccountAssignmentCreationStatusCommandInput,
  ListAccountAssignmentCreationStatusCommandOutput,
} from "../commands/ListAccountAssignmentCreationStatusCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountAssignmentCreationStatus: (
  config: SSOAdminPaginationConfiguration,
  input: ListAccountAssignmentCreationStatusCommandInput,
  ...rest: any[]
) => Paginator<ListAccountAssignmentCreationStatusCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListAccountAssignmentCreationStatusCommandInput,
  ListAccountAssignmentCreationStatusCommandOutput
>(SSOAdminClient, ListAccountAssignmentCreationStatusCommand, "NextToken", "NextToken", "MaxResults");
