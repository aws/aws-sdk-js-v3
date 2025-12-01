// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFleetsForVehicleCommand,
  ListFleetsForVehicleCommandInput,
  ListFleetsForVehicleCommandOutput,
} from "../commands/ListFleetsForVehicleCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFleetsForVehicle: (
  config: IoTFleetWisePaginationConfiguration,
  input: ListFleetsForVehicleCommandInput,
  ...rest: any[]
) => Paginator<ListFleetsForVehicleCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  ListFleetsForVehicleCommandInput,
  ListFleetsForVehicleCommandOutput
>(IoTFleetWiseClient, ListFleetsForVehicleCommand, "nextToken", "nextToken", "maxResults");
