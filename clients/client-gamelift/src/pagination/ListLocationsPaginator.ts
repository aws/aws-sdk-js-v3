// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLocationsCommand,
  ListLocationsCommandInput,
  ListLocationsCommandOutput,
} from "../commands/ListLocationsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLocations: (
  config: GameLiftPaginationConfiguration,
  input: ListLocationsCommandInput,
  ...rest: any[]
) => Paginator<ListLocationsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  ListLocationsCommandInput,
  ListLocationsCommandOutput
>(GameLiftClient, ListLocationsCommand, "NextToken", "NextToken", "Limit");
