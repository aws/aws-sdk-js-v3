// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKeyPhrasesDetectionJobsCommand,
  ListKeyPhrasesDetectionJobsCommandInput,
  ListKeyPhrasesDetectionJobsCommandOutput,
} from "../commands/ListKeyPhrasesDetectionJobsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKeyPhrasesDetectionJobs: (
  config: ComprehendPaginationConfiguration,
  input: ListKeyPhrasesDetectionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListKeyPhrasesDetectionJobsCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListKeyPhrasesDetectionJobsCommandInput,
  ListKeyPhrasesDetectionJobsCommandOutput
>(ComprehendClient, ListKeyPhrasesDetectionJobsCommand, "NextToken", "NextToken", "MaxResults");
