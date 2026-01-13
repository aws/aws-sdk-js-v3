// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ARCRegionSwitchClient } from "../ARCRegionSwitchClient";
import {
  ListRoute53HealthChecksInRegionCommand,
  ListRoute53HealthChecksInRegionCommandInput,
  ListRoute53HealthChecksInRegionCommandOutput,
} from "../commands/ListRoute53HealthChecksInRegionCommand";
import { ARCRegionSwitchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoute53HealthChecksInRegion: (
  config: ARCRegionSwitchPaginationConfiguration,
  input: ListRoute53HealthChecksInRegionCommandInput,
  ...rest: any[]
) => Paginator<ListRoute53HealthChecksInRegionCommandOutput> = createPaginator<
  ARCRegionSwitchPaginationConfiguration,
  ListRoute53HealthChecksInRegionCommandInput,
  ListRoute53HealthChecksInRegionCommandOutput
>(ARCRegionSwitchClient, ListRoute53HealthChecksInRegionCommand, "nextToken", "nextToken", "maxResults");
