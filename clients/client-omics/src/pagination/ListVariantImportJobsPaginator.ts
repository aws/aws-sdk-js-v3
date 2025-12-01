// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVariantImportJobsCommand,
  ListVariantImportJobsCommandInput,
  ListVariantImportJobsCommandOutput,
} from "../commands/ListVariantImportJobsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVariantImportJobs: (
  config: OmicsPaginationConfiguration,
  input: ListVariantImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListVariantImportJobsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListVariantImportJobsCommandInput,
  ListVariantImportJobsCommandOutput
>(OmicsClient, ListVariantImportJobsCommand, "nextToken", "nextToken", "maxResults");
