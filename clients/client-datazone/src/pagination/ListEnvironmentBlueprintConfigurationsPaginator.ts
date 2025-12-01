// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentBlueprintConfigurationsCommand,
  ListEnvironmentBlueprintConfigurationsCommandInput,
  ListEnvironmentBlueprintConfigurationsCommandOutput,
} from "../commands/ListEnvironmentBlueprintConfigurationsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironmentBlueprintConfigurations: (
  config: DataZonePaginationConfiguration,
  input: ListEnvironmentBlueprintConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentBlueprintConfigurationsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListEnvironmentBlueprintConfigurationsCommandInput,
  ListEnvironmentBlueprintConfigurationsCommandOutput
>(DataZoneClient, ListEnvironmentBlueprintConfigurationsCommand, "nextToken", "nextToken", "maxResults");
