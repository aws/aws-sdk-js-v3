// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroundStationsCommand,
  ListGroundStationsCommandInput,
  ListGroundStationsCommandOutput,
} from "../commands/ListGroundStationsCommand";
import { GroundStationClient } from "../GroundStationClient";
import { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroundStations: (
  config: GroundStationPaginationConfiguration,
  input: ListGroundStationsCommandInput,
  ...rest: any[]
) => Paginator<ListGroundStationsCommandOutput> = createPaginator<
  GroundStationPaginationConfiguration,
  ListGroundStationsCommandInput,
  ListGroundStationsCommandOutput
>(GroundStationClient, ListGroundStationsCommand, "nextToken", "nextToken", "maxResults");
