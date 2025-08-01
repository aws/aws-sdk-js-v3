// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ARCRegionSwitchClient } from "../ARCRegionSwitchClient";
import {
  ListPlansInRegionCommand,
  ListPlansInRegionCommandInput,
  ListPlansInRegionCommandOutput,
} from "../commands/ListPlansInRegionCommand";
import { ARCRegionSwitchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlansInRegion: (
  config: ARCRegionSwitchPaginationConfiguration,
  input: ListPlansInRegionCommandInput,
  ...rest: any[]
) => Paginator<ListPlansInRegionCommandOutput> = createPaginator<
  ARCRegionSwitchPaginationConfiguration,
  ListPlansInRegionCommandInput,
  ListPlansInRegionCommandOutput
>(ARCRegionSwitchClient, ListPlansInRegionCommand, "nextToken", "nextToken", "maxResults");
