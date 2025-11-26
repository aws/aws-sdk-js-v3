// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVehiclesCommand,
  ListVehiclesCommandInput,
  ListVehiclesCommandOutput,
} from "../commands/ListVehiclesCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVehicles: (
  config: IoTFleetWisePaginationConfiguration,
  input: ListVehiclesCommandInput,
  ...rest: any[]
) => Paginator<ListVehiclesCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  ListVehiclesCommandInput,
  ListVehiclesCommandOutput
>(IoTFleetWiseClient, ListVehiclesCommand, "nextToken", "nextToken", "maxResults");
