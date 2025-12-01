// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationAssignmentsForPrincipalCommand,
  ListApplicationAssignmentsForPrincipalCommandInput,
  ListApplicationAssignmentsForPrincipalCommandOutput,
} from "../commands/ListApplicationAssignmentsForPrincipalCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationAssignmentsForPrincipal: (
  config: SSOAdminPaginationConfiguration,
  input: ListApplicationAssignmentsForPrincipalCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationAssignmentsForPrincipalCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListApplicationAssignmentsForPrincipalCommandInput,
  ListApplicationAssignmentsForPrincipalCommandOutput
>(SSOAdminClient, ListApplicationAssignmentsForPrincipalCommand, "NextToken", "NextToken", "MaxResults");
