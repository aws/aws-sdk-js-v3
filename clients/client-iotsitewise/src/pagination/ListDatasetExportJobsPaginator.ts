// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetExportJobsCommand,
  ListDatasetExportJobsCommandInput,
  ListDatasetExportJobsCommandOutput,
} from "../commands/ListDatasetExportJobsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetExportJobs: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListDatasetExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetExportJobsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListDatasetExportJobsCommandInput,
  ListDatasetExportJobsCommandOutput
>(IoTSiteWiseClient, ListDatasetExportJobsCommand, "nextToken", "nextToken", "maxResults");
