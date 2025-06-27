// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAuthenticationProfilesCommand,
  ListAuthenticationProfilesCommandInput,
  ListAuthenticationProfilesCommandOutput,
} from "../commands/ListAuthenticationProfilesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAuthenticationProfiles: (
  config: ConnectPaginationConfiguration,
  input: ListAuthenticationProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListAuthenticationProfilesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListAuthenticationProfilesCommandInput,
  ListAuthenticationProfilesCommandOutput
>(ConnectClient, ListAuthenticationProfilesCommand, "NextToken", "NextToken", "MaxResults");
