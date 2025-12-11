// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMilestonesCommand,
  ListMilestonesCommandInput,
  ListMilestonesCommandOutput,
} from "../commands/ListMilestonesCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMilestones: (
  config: WellArchitectedPaginationConfiguration,
  input: ListMilestonesCommandInput,
  ...rest: any[]
) => Paginator<ListMilestonesCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListMilestonesCommandInput,
  ListMilestonesCommandOutput
>(WellArchitectedClient, ListMilestonesCommand, "NextToken", "NextToken", "MaxResults");
