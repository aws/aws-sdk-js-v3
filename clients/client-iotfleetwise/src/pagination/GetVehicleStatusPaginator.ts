// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetVehicleStatusCommand,
  GetVehicleStatusCommandInput,
  GetVehicleStatusCommandOutput,
} from "../commands/GetVehicleStatusCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetVehicleStatus: (
  config: IoTFleetWisePaginationConfiguration,
  input: GetVehicleStatusCommandInput,
  ...rest: any[]
) => Paginator<GetVehicleStatusCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  GetVehicleStatusCommandInput,
  GetVehicleStatusCommandOutput
>(IoTFleetWiseClient, GetVehicleStatusCommand, "nextToken", "nextToken", "maxResults");
