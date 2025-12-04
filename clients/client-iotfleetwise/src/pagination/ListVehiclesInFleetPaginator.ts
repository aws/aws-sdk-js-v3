// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVehiclesInFleetCommand,
  ListVehiclesInFleetCommandInput,
  ListVehiclesInFleetCommandOutput,
} from "../commands/ListVehiclesInFleetCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVehiclesInFleet: (
  config: IoTFleetWisePaginationConfiguration,
  input: ListVehiclesInFleetCommandInput,
  ...rest: any[]
) => Paginator<ListVehiclesInFleetCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  ListVehiclesInFleetCommandInput,
  ListVehiclesInFleetCommandOutput
>(IoTFleetWiseClient, ListVehiclesInFleetCommand, "nextToken", "nextToken", "maxResults");
