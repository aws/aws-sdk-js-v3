// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProjectProfilesCommand,
  ListProjectProfilesCommandInput,
  ListProjectProfilesCommandOutput,
} from "../commands/ListProjectProfilesCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProjectProfiles: (
  config: DataZonePaginationConfiguration,
  input: ListProjectProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListProjectProfilesCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListProjectProfilesCommandInput,
  ListProjectProfilesCommandOutput
>(DataZoneClient, ListProjectProfilesCommand, "nextToken", "nextToken", "maxResults");
