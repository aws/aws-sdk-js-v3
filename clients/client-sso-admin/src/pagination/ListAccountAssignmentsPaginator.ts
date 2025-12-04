// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountAssignmentsCommand,
  ListAccountAssignmentsCommandInput,
  ListAccountAssignmentsCommandOutput,
} from "../commands/ListAccountAssignmentsCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountAssignments: (
  config: SSOAdminPaginationConfiguration,
  input: ListAccountAssignmentsCommandInput,
  ...rest: any[]
) => Paginator<ListAccountAssignmentsCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListAccountAssignmentsCommandInput,
  ListAccountAssignmentsCommandOutput
>(SSOAdminClient, ListAccountAssignmentsCommand, "NextToken", "NextToken", "MaxResults");
