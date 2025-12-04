// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLandingZonesCommand,
  ListLandingZonesCommandInput,
  ListLandingZonesCommandOutput,
} from "../commands/ListLandingZonesCommand";
import { ControlTowerClient } from "../ControlTowerClient";
import { ControlTowerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLandingZones: (
  config: ControlTowerPaginationConfiguration,
  input: ListLandingZonesCommandInput,
  ...rest: any[]
) => Paginator<ListLandingZonesCommandOutput> = createPaginator<
  ControlTowerPaginationConfiguration,
  ListLandingZonesCommandInput,
  ListLandingZonesCommandOutput
>(ControlTowerClient, ListLandingZonesCommand, "nextToken", "nextToken", "maxResults");
