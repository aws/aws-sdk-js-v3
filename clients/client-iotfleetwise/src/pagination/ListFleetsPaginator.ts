// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFleets: (
  config: IoTFleetWisePaginationConfiguration,
  input: ListFleetsCommandInput,
  ...rest: any[]
) => Paginator<ListFleetsCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  ListFleetsCommandInput,
  ListFleetsCommandOutput
>(IoTFleetWiseClient, ListFleetsCommand, "nextToken", "nextToken", "maxResults");
