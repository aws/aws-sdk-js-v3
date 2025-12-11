// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetExportJobsCommand,
  ListDatasetExportJobsCommandInput,
  ListDatasetExportJobsCommandOutput,
} from "../commands/ListDatasetExportJobsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetExportJobs: (
  config: PersonalizePaginationConfiguration,
  input: ListDatasetExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetExportJobsCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListDatasetExportJobsCommandInput,
  ListDatasetExportJobsCommandOutput
>(PersonalizeClient, ListDatasetExportJobsCommand, "nextToken", "nextToken", "maxResults");
