// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAdminAccountsCommand,
  ListAdminAccountsCommandInput,
  ListAdminAccountsCommandOutput,
} from "../commands/ListAdminAccountsCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAdminAccounts: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListAdminAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListAdminAccountsCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListAdminAccountsCommandInput,
  ListAdminAccountsCommandOutput
>(NetworkSecurityManagerClient, ListAdminAccountsCommand, "nextToken", "nextToken", "maxResults");
