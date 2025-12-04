// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationAssignmentsCommand,
  ListApplicationAssignmentsCommandInput,
  ListApplicationAssignmentsCommandOutput,
} from "../commands/ListApplicationAssignmentsCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationAssignments: (
  config: SSOAdminPaginationConfiguration,
  input: ListApplicationAssignmentsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationAssignmentsCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListApplicationAssignmentsCommandInput,
  ListApplicationAssignmentsCommandOutput
>(SSOAdminClient, ListApplicationAssignmentsCommand, "NextToken", "NextToken", "MaxResults");
