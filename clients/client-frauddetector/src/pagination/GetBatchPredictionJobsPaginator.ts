// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetBatchPredictionJobsCommand,
  GetBatchPredictionJobsCommandInput,
  GetBatchPredictionJobsCommandOutput,
} from "../commands/GetBatchPredictionJobsCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetBatchPredictionJobs: (
  config: FraudDetectorPaginationConfiguration,
  input: GetBatchPredictionJobsCommandInput,
  ...rest: any[]
) => Paginator<GetBatchPredictionJobsCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  GetBatchPredictionJobsCommandInput,
  GetBatchPredictionJobsCommandOutput
>(FraudDetectorClient, GetBatchPredictionJobsCommand, "nextToken", "nextToken", "maxResults");
