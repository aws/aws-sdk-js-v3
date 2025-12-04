// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBulkImportJobsCommand,
  ListBulkImportJobsCommandInput,
  ListBulkImportJobsCommandOutput,
} from "../commands/ListBulkImportJobsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBulkImportJobs: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListBulkImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListBulkImportJobsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListBulkImportJobsCommandInput,
  ListBulkImportJobsCommandOutput
>(IoTSiteWiseClient, ListBulkImportJobsCommand, "nextToken", "nextToken", "maxResults");
