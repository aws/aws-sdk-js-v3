// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroundStationReservationsCommand,
  ListGroundStationReservationsCommandInput,
  ListGroundStationReservationsCommandOutput,
} from "../commands/ListGroundStationReservationsCommand";
import { GroundStationClient } from "../GroundStationClient";
import type { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroundStationReservations: (
  config: GroundStationPaginationConfiguration,
  input: ListGroundStationReservationsCommandInput,
  ...rest: any[]
) => Paginator<ListGroundStationReservationsCommandOutput> = createPaginator<
  GroundStationPaginationConfiguration,
  ListGroundStationReservationsCommandInput,
  ListGroundStationReservationsCommandOutput
>(GroundStationClient, ListGroundStationReservationsCommand, "nextToken", "nextToken", "maxResults");
