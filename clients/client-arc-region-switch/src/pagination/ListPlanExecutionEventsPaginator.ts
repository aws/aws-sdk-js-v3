// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ARCRegionSwitchClient } from "../ARCRegionSwitchClient";
import {
  ListPlanExecutionEventsCommand,
  ListPlanExecutionEventsCommandInput,
  ListPlanExecutionEventsCommandOutput,
} from "../commands/ListPlanExecutionEventsCommand";
import { ARCRegionSwitchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlanExecutionEvents: (
  config: ARCRegionSwitchPaginationConfiguration,
  input: ListPlanExecutionEventsCommandInput,
  ...rest: any[]
) => Paginator<ListPlanExecutionEventsCommandOutput> = createPaginator<
  ARCRegionSwitchPaginationConfiguration,
  ListPlanExecutionEventsCommandInput,
  ListPlanExecutionEventsCommandOutput
>(ARCRegionSwitchClient, ListPlanExecutionEventsCommand, "nextToken", "nextToken", "maxResults");
