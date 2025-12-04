// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMissionProfilesCommand,
  ListMissionProfilesCommandInput,
  ListMissionProfilesCommandOutput,
} from "../commands/ListMissionProfilesCommand";
import { GroundStationClient } from "../GroundStationClient";
import { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMissionProfiles: (
  config: GroundStationPaginationConfiguration,
  input: ListMissionProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListMissionProfilesCommandOutput> = createPaginator<
  GroundStationPaginationConfiguration,
  ListMissionProfilesCommandInput,
  ListMissionProfilesCommandOutput
>(GroundStationClient, ListMissionProfilesCommand, "nextToken", "nextToken", "maxResults");
