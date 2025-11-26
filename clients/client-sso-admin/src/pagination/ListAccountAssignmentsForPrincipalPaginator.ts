// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountAssignmentsForPrincipalCommand,
  ListAccountAssignmentsForPrincipalCommandInput,
  ListAccountAssignmentsForPrincipalCommandOutput,
} from "../commands/ListAccountAssignmentsForPrincipalCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountAssignmentsForPrincipal: (
  config: SSOAdminPaginationConfiguration,
  input: ListAccountAssignmentsForPrincipalCommandInput,
  ...rest: any[]
) => Paginator<ListAccountAssignmentsForPrincipalCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListAccountAssignmentsForPrincipalCommandInput,
  ListAccountAssignmentsForPrincipalCommandOutput
>(SSOAdminClient, ListAccountAssignmentsForPrincipalCommand, "NextToken", "NextToken", "MaxResults");
