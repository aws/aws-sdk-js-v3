// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImportJobsCommand,
  ListImportJobsCommandInput,
  ListImportJobsCommandOutput,
} from "../commands/ListImportJobsCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImportJobs: (
  config: QConnectPaginationConfiguration,
  input: ListImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListImportJobsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListImportJobsCommandInput,
  ListImportJobsCommandOutput
>(QConnectClient, ListImportJobsCommand, "nextToken", "nextToken", "maxResults");
