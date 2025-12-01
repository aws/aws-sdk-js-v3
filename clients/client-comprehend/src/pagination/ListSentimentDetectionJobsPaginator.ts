// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSentimentDetectionJobsCommand,
  ListSentimentDetectionJobsCommandInput,
  ListSentimentDetectionJobsCommandOutput,
} from "../commands/ListSentimentDetectionJobsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSentimentDetectionJobs: (
  config: ComprehendPaginationConfiguration,
  input: ListSentimentDetectionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListSentimentDetectionJobsCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListSentimentDetectionJobsCommandInput,
  ListSentimentDetectionJobsCommandOutput
>(ComprehendClient, ListSentimentDetectionJobsCommand, "NextToken", "NextToken", "MaxResults");
