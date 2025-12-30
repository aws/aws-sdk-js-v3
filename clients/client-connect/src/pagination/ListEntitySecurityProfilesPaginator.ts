// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEntitySecurityProfilesCommand,
  ListEntitySecurityProfilesCommandInput,
  ListEntitySecurityProfilesCommandOutput,
} from "../commands/ListEntitySecurityProfilesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntitySecurityProfiles: (
  config: ConnectPaginationConfiguration,
  input: ListEntitySecurityProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListEntitySecurityProfilesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListEntitySecurityProfilesCommandInput,
  ListEntitySecurityProfilesCommandOutput
>(ConnectClient, ListEntitySecurityProfilesCommand, "NextToken", "NextToken", "MaxResults");
