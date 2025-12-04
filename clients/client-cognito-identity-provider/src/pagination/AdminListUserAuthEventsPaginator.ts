// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  AdminListUserAuthEventsCommand,
  AdminListUserAuthEventsCommandInput,
  AdminListUserAuthEventsCommandOutput,
} from "../commands/AdminListUserAuthEventsCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateAdminListUserAuthEvents: (
  config: CognitoIdentityProviderPaginationConfiguration,
  input: AdminListUserAuthEventsCommandInput,
  ...rest: any[]
) => Paginator<AdminListUserAuthEventsCommandOutput> = createPaginator<
  CognitoIdentityProviderPaginationConfiguration,
  AdminListUserAuthEventsCommandInput,
  AdminListUserAuthEventsCommandOutput
>(CognitoIdentityProviderClient, AdminListUserAuthEventsCommand, "NextToken", "NextToken", "MaxResults");
