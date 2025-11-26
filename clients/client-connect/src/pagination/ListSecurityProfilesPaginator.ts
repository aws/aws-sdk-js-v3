// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityProfilesCommand,
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "../commands/ListSecurityProfilesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityProfiles: (
  config: ConnectPaginationConfiguration,
  input: ListSecurityProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityProfilesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput
>(ConnectClient, ListSecurityProfilesCommand, "NextToken", "NextToken", "MaxResults");
