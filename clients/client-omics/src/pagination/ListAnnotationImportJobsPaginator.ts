// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAnnotationImportJobsCommand,
  ListAnnotationImportJobsCommandInput,
  ListAnnotationImportJobsCommandOutput,
} from "../commands/ListAnnotationImportJobsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnnotationImportJobs: (
  config: OmicsPaginationConfiguration,
  input: ListAnnotationImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListAnnotationImportJobsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListAnnotationImportJobsCommandInput,
  ListAnnotationImportJobsCommandOutput
>(OmicsClient, ListAnnotationImportJobsCommand, "nextToken", "nextToken", "maxResults");
