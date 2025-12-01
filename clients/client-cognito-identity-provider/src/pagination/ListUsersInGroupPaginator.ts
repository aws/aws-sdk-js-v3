// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  ListUsersInGroupCommand,
  ListUsersInGroupCommandInput,
  ListUsersInGroupCommandOutput,
} from "../commands/ListUsersInGroupCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUsersInGroup: (
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListUsersInGroupCommandInput,
  ...rest: any[]
) => Paginator<ListUsersInGroupCommandOutput> = createPaginator<
  CognitoIdentityProviderPaginationConfiguration,
  ListUsersInGroupCommandInput,
  ListUsersInGroupCommandOutput
>(CognitoIdentityProviderClient, ListUsersInGroupCommand, "NextToken", "NextToken", "Limit");
