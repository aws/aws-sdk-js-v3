// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrackerConsumersCommand,
  ListTrackerConsumersCommandInput,
  ListTrackerConsumersCommandOutput,
} from "../commands/ListTrackerConsumersCommand";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrackerConsumers: (
  config: LocationPaginationConfiguration,
  input: ListTrackerConsumersCommandInput,
  ...rest: any[]
) => Paginator<ListTrackerConsumersCommandOutput> = createPaginator<
  LocationPaginationConfiguration,
  ListTrackerConsumersCommandInput,
  ListTrackerConsumersCommandOutput
>(LocationClient, ListTrackerConsumersCommand, "NextToken", "NextToken", "MaxResults");
