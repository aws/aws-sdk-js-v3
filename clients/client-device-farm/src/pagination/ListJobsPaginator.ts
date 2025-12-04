// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobs: (
  config: DeviceFarmPaginationConfiguration,
  input: ListJobsCommandInput,
  ...rest: any[]
) => Paginator<ListJobsCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListJobsCommandInput,
  ListJobsCommandOutput
>(DeviceFarmClient, ListJobsCommand, "nextToken", "nextToken", "");
