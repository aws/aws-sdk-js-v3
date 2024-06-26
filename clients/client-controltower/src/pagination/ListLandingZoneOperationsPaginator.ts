// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListLandingZoneOperationsCommand,
  ListLandingZoneOperationsCommandInput,
  ListLandingZoneOperationsCommandOutput,
} from "../commands/ListLandingZoneOperationsCommand";
import { ControlTowerClient } from "../ControlTowerClient";
import { ControlTowerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLandingZoneOperations: (
  config: ControlTowerPaginationConfiguration,
  input: ListLandingZoneOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListLandingZoneOperationsCommandOutput> = createPaginator<
  ControlTowerPaginationConfiguration,
  ListLandingZoneOperationsCommandInput,
  ListLandingZoneOperationsCommandOutput
>(ControlTowerClient, ListLandingZoneOperationsCommand, "nextToken", "nextToken", "maxResults");
