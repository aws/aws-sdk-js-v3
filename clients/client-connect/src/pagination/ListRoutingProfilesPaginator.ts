// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRoutingProfilesCommand,
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput,
} from "../commands/ListRoutingProfilesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoutingProfiles: (
  config: ConnectPaginationConfiguration,
  input: ListRoutingProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListRoutingProfilesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput
>(ConnectClient, ListRoutingProfilesCommand, "NextToken", "NextToken", "MaxResults");
