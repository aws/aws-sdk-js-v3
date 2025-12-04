// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBatchSegmentJobsCommand,
  ListBatchSegmentJobsCommandInput,
  ListBatchSegmentJobsCommandOutput,
} from "../commands/ListBatchSegmentJobsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBatchSegmentJobs: (
  config: PersonalizePaginationConfiguration,
  input: ListBatchSegmentJobsCommandInput,
  ...rest: any[]
) => Paginator<ListBatchSegmentJobsCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListBatchSegmentJobsCommandInput,
  ListBatchSegmentJobsCommandOutput
>(PersonalizeClient, ListBatchSegmentJobsCommand, "nextToken", "nextToken", "maxResults");
