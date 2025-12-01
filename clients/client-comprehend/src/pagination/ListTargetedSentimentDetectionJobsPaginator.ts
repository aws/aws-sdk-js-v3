// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTargetedSentimentDetectionJobsCommand,
  ListTargetedSentimentDetectionJobsCommandInput,
  ListTargetedSentimentDetectionJobsCommandOutput,
} from "../commands/ListTargetedSentimentDetectionJobsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTargetedSentimentDetectionJobs: (
  config: ComprehendPaginationConfiguration,
  input: ListTargetedSentimentDetectionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListTargetedSentimentDetectionJobsCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListTargetedSentimentDetectionJobsCommandInput,
  ListTargetedSentimentDetectionJobsCommandOutput
>(ComprehendClient, ListTargetedSentimentDetectionJobsCommand, "NextToken", "NextToken", "MaxResults");
