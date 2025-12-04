// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentBlueprintsCommand,
  ListEnvironmentBlueprintsCommandInput,
  ListEnvironmentBlueprintsCommandOutput,
} from "../commands/ListEnvironmentBlueprintsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironmentBlueprints: (
  config: DataZonePaginationConfiguration,
  input: ListEnvironmentBlueprintsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentBlueprintsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListEnvironmentBlueprintsCommandInput,
  ListEnvironmentBlueprintsCommandOutput
>(DataZoneClient, ListEnvironmentBlueprintsCommand, "nextToken", "nextToken", "maxResults");
