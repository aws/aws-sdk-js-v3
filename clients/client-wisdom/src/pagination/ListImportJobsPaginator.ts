// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImportJobsCommand,
  ListImportJobsCommandInput,
  ListImportJobsCommandOutput,
} from "../commands/ListImportJobsCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImportJobs: (
  config: WisdomPaginationConfiguration,
  input: ListImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListImportJobsCommandOutput> = createPaginator<
  WisdomPaginationConfiguration,
  ListImportJobsCommandInput,
  ListImportJobsCommandOutput
>(WisdomClient, ListImportJobsCommand, "nextToken", "nextToken", "maxResults");
