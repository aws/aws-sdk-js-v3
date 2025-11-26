// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSchedulesCommand,
  ListSchedulesCommandInput,
  ListSchedulesCommandOutput,
} from "../commands/ListSchedulesCommand";
import { SchedulerClient } from "../SchedulerClient";
import { SchedulerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSchedules: (
  config: SchedulerPaginationConfiguration,
  input: ListSchedulesCommandInput,
  ...rest: any[]
) => Paginator<ListSchedulesCommandOutput> = createPaginator<
  SchedulerPaginationConfiguration,
  ListSchedulesCommandInput,
  ListSchedulesCommandOutput
>(SchedulerClient, ListSchedulesCommand, "NextToken", "NextToken", "MaxResults");
