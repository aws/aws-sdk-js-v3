// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListActivitiesCommand,
  ListActivitiesCommandInput,
  ListActivitiesCommandOutput,
} from "../commands/ListActivitiesCommand";
import { SFNClient } from "../SFNClient";
import { SFNPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListActivities: (
  config: SFNPaginationConfiguration,
  input: ListActivitiesCommandInput,
  ...rest: any[]
) => Paginator<ListActivitiesCommandOutput> = createPaginator<
  SFNPaginationConfiguration,
  ListActivitiesCommandInput,
  ListActivitiesCommandOutput
>(SFNClient, ListActivitiesCommand, "nextToken", "nextToken", "maxResults");
