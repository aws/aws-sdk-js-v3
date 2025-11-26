// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRouteCalculatorsCommand,
  ListRouteCalculatorsCommandInput,
  ListRouteCalculatorsCommandOutput,
} from "../commands/ListRouteCalculatorsCommand";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRouteCalculators: (
  config: LocationPaginationConfiguration,
  input: ListRouteCalculatorsCommandInput,
  ...rest: any[]
) => Paginator<ListRouteCalculatorsCommandOutput> = createPaginator<
  LocationPaginationConfiguration,
  ListRouteCalculatorsCommandInput,
  ListRouteCalculatorsCommandOutput
>(LocationClient, ListRouteCalculatorsCommand, "NextToken", "NextToken", "MaxResults");
