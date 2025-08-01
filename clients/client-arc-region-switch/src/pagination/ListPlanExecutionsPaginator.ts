// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ARCRegionSwitchClient } from "../ARCRegionSwitchClient";
import {
  ListPlanExecutionsCommand,
  ListPlanExecutionsCommandInput,
  ListPlanExecutionsCommandOutput,
} from "../commands/ListPlanExecutionsCommand";
import { ARCRegionSwitchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlanExecutions: (
  config: ARCRegionSwitchPaginationConfiguration,
  input: ListPlanExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListPlanExecutionsCommandOutput> = createPaginator<
  ARCRegionSwitchPaginationConfiguration,
  ListPlanExecutionsCommandInput,
  ListPlanExecutionsCommandOutput
>(ARCRegionSwitchClient, ListPlanExecutionsCommand, "nextToken", "nextToken", "maxResults");
