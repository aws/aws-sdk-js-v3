// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPickupLocationsCommand,
  ListPickupLocationsCommandInput,
  ListPickupLocationsCommandOutput,
} from "../commands/ListPickupLocationsCommand";
import { SnowballClient } from "../SnowballClient";
import { SnowballPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPickupLocations: (
  config: SnowballPaginationConfiguration,
  input: ListPickupLocationsCommandInput,
  ...rest: any[]
) => Paginator<ListPickupLocationsCommandOutput> = createPaginator<
  SnowballPaginationConfiguration,
  ListPickupLocationsCommandInput,
  ListPickupLocationsCommandOutput
>(SnowballClient, ListPickupLocationsCommand, "NextToken", "NextToken", "MaxResults");
