// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReadSetImportJobsCommand,
  ListReadSetImportJobsCommandInput,
  ListReadSetImportJobsCommandOutput,
} from "../commands/ListReadSetImportJobsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReadSetImportJobs: (
  config: OmicsPaginationConfiguration,
  input: ListReadSetImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListReadSetImportJobsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListReadSetImportJobsCommandInput,
  ListReadSetImportJobsCommandOutput
>(OmicsClient, ListReadSetImportJobsCommand, "nextToken", "nextToken", "maxResults");
