// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSatellitesCommand,
  ListSatellitesCommandInput,
  ListSatellitesCommandOutput,
} from "../commands/ListSatellitesCommand";
import { GroundStationClient } from "../GroundStationClient";
import { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSatellites: (
  config: GroundStationPaginationConfiguration,
  input: ListSatellitesCommandInput,
  ...rest: any[]
) => Paginator<ListSatellitesCommandOutput> = createPaginator<
  GroundStationPaginationConfiguration,
  ListSatellitesCommandInput,
  ListSatellitesCommandOutput
>(GroundStationClient, ListSatellitesCommand, "nextToken", "nextToken", "maxResults");
