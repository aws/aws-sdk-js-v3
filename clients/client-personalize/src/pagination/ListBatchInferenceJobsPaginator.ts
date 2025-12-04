// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBatchInferenceJobsCommand,
  ListBatchInferenceJobsCommandInput,
  ListBatchInferenceJobsCommandOutput,
} from "../commands/ListBatchInferenceJobsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBatchInferenceJobs: (
  config: PersonalizePaginationConfiguration,
  input: ListBatchInferenceJobsCommandInput,
  ...rest: any[]
) => Paginator<ListBatchInferenceJobsCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListBatchInferenceJobsCommandInput,
  ListBatchInferenceJobsCommandOutput
>(PersonalizeClient, ListBatchInferenceJobsCommand, "nextToken", "nextToken", "maxResults");
