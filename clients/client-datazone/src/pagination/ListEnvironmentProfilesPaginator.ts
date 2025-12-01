// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentProfilesCommand,
  ListEnvironmentProfilesCommandInput,
  ListEnvironmentProfilesCommandOutput,
} from "../commands/ListEnvironmentProfilesCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironmentProfiles: (
  config: DataZonePaginationConfiguration,
  input: ListEnvironmentProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentProfilesCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListEnvironmentProfilesCommandInput,
  ListEnvironmentProfilesCommandOutput
>(DataZoneClient, ListEnvironmentProfilesCommand, "nextToken", "nextToken", "maxResults");
