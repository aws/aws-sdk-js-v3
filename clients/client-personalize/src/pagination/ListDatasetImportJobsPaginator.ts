// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetImportJobsCommand,
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "../commands/ListDatasetImportJobsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetImportJobs: (
  config: PersonalizePaginationConfiguration,
  input: ListDatasetImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetImportJobsCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput
>(PersonalizeClient, ListDatasetImportJobsCommand, "nextToken", "nextToken", "maxResults");
