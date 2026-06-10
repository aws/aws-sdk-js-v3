// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourcePermissionStatementsCommand,
  ListResourcePermissionStatementsCommandInput,
  ListResourcePermissionStatementsCommandOutput,
} from "../commands/ListResourcePermissionStatementsCommand";
import { SigninClient } from "../SigninClient";
import type { SigninPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourcePermissionStatements: (
  config: SigninPaginationConfiguration,
  input: ListResourcePermissionStatementsCommandInput,
  ...rest: any[]
) => Paginator<ListResourcePermissionStatementsCommandOutput> = createPaginator<
  SigninPaginationConfiguration,
  ListResourcePermissionStatementsCommandInput,
  ListResourcePermissionStatementsCommandOutput
>(SigninClient, ListResourcePermissionStatementsCommand, "nextToken", "nextToken", "maxResults");
