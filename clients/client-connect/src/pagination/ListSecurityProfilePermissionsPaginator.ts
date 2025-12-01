// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityProfilePermissionsCommand,
  ListSecurityProfilePermissionsCommandInput,
  ListSecurityProfilePermissionsCommandOutput,
} from "../commands/ListSecurityProfilePermissionsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityProfilePermissions: (
  config: ConnectPaginationConfiguration,
  input: ListSecurityProfilePermissionsCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityProfilePermissionsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListSecurityProfilePermissionsCommandInput,
  ListSecurityProfilePermissionsCommandOutput
>(ConnectClient, ListSecurityProfilePermissionsCommand, "NextToken", "NextToken", "MaxResults");
