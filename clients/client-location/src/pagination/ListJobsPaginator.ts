// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { LocationClient } from "../LocationClient";
import type { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobs: (
  config: LocationPaginationConfiguration,
  input: ListJobsCommandInput,
  ...rest: any[]
) => Paginator<ListJobsCommandOutput> = createPaginator<
  LocationPaginationConfiguration,
  ListJobsCommandInput,
  ListJobsCommandOutput
>(LocationClient, ListJobsCommand, "NextToken", "NextToken", "MaxResults");
