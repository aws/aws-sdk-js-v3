// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  AdminListGroupsForUserCommand,
  AdminListGroupsForUserCommandInput,
  AdminListGroupsForUserCommandOutput,
} from "../commands/AdminListGroupsForUserCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateAdminListGroupsForUser: (
  config: CognitoIdentityProviderPaginationConfiguration,
  input: AdminListGroupsForUserCommandInput,
  ...rest: any[]
) => Paginator<AdminListGroupsForUserCommandOutput> = createPaginator<
  CognitoIdentityProviderPaginationConfiguration,
  AdminListGroupsForUserCommandInput,
  AdminListGroupsForUserCommandOutput
>(CognitoIdentityProviderClient, AdminListGroupsForUserCommand, "NextToken", "NextToken", "Limit");
