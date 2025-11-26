// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUsers: (
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListUsersCommandInput,
  ...rest: any[]
) => Paginator<ListUsersCommandOutput> = createPaginator<
  CognitoIdentityProviderPaginationConfiguration,
  ListUsersCommandInput,
  ListUsersCommandOutput
>(CognitoIdentityProviderClient, ListUsersCommand, "PaginationToken", "PaginationToken", "Limit");
