// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReferenceImportJobsCommand,
  ListReferenceImportJobsCommandInput,
  ListReferenceImportJobsCommandOutput,
} from "../commands/ListReferenceImportJobsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReferenceImportJobs: (
  config: OmicsPaginationConfiguration,
  input: ListReferenceImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListReferenceImportJobsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListReferenceImportJobsCommandInput,
  ListReferenceImportJobsCommandOutput
>(OmicsClient, ListReferenceImportJobsCommand, "nextToken", "nextToken", "maxResults");
