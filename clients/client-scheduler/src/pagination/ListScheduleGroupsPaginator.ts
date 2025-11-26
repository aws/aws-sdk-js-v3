// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListScheduleGroupsCommand,
  ListScheduleGroupsCommandInput,
  ListScheduleGroupsCommandOutput,
} from "../commands/ListScheduleGroupsCommand";
import { SchedulerClient } from "../SchedulerClient";
import { SchedulerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScheduleGroups: (
  config: SchedulerPaginationConfiguration,
  input: ListScheduleGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListScheduleGroupsCommandOutput> = createPaginator<
  SchedulerPaginationConfiguration,
  ListScheduleGroupsCommandInput,
  ListScheduleGroupsCommandOutput
>(SchedulerClient, ListScheduleGroupsCommand, "NextToken", "NextToken", "MaxResults");
