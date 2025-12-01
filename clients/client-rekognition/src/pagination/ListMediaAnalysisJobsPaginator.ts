// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMediaAnalysisJobsCommand,
  ListMediaAnalysisJobsCommandInput,
  ListMediaAnalysisJobsCommandOutput,
} from "../commands/ListMediaAnalysisJobsCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMediaAnalysisJobs: (
  config: RekognitionPaginationConfiguration,
  input: ListMediaAnalysisJobsCommandInput,
  ...rest: any[]
) => Paginator<ListMediaAnalysisJobsCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  ListMediaAnalysisJobsCommandInput,
  ListMediaAnalysisJobsCommandOutput
>(RekognitionClient, ListMediaAnalysisJobsCommand, "NextToken", "NextToken", "MaxResults");
