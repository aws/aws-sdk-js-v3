// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetBatchImportJobsCommand,
  GetBatchImportJobsCommandInput,
  GetBatchImportJobsCommandOutput,
} from "../commands/GetBatchImportJobsCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetBatchImportJobs: (
  config: FraudDetectorPaginationConfiguration,
  input: GetBatchImportJobsCommandInput,
  ...rest: any[]
) => Paginator<GetBatchImportJobsCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  GetBatchImportJobsCommandInput,
  GetBatchImportJobsCommandOutput
>(FraudDetectorClient, GetBatchImportJobsCommand, "nextToken", "nextToken", "maxResults");
