// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ARCRegionSwitchClient } from "../ARCRegionSwitchClient";
import { ListPlansCommand, ListPlansCommandInput, ListPlansCommandOutput } from "../commands/ListPlansCommand";
import { ARCRegionSwitchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlans: (
  config: ARCRegionSwitchPaginationConfiguration,
  input: ListPlansCommandInput,
  ...rest: any[]
) => Paginator<ListPlansCommandOutput> = createPaginator<
  ARCRegionSwitchPaginationConfiguration,
  ListPlansCommandInput,
  ListPlansCommandOutput
>(ARCRegionSwitchClient, ListPlansCommand, "nextToken", "nextToken", "maxResults");
