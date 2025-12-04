// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BatchClient } from "../BatchClient";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobs: (
  config: BatchPaginationConfiguration,
  input: ListJobsCommandInput,
  ...rest: any[]
) => Paginator<ListJobsCommandOutput> = createPaginator<
  BatchPaginationConfiguration,
  ListJobsCommandInput,
  ListJobsCommandOutput
>(BatchClient, ListJobsCommand, "nextToken", "nextToken", "maxResults");
