// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListTrainedModelInferenceJobsCommand,
  ListTrainedModelInferenceJobsCommandInput,
  ListTrainedModelInferenceJobsCommandOutput,
} from "../commands/ListTrainedModelInferenceJobsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrainedModelInferenceJobs: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListTrainedModelInferenceJobsCommandInput,
  ...rest: any[]
) => Paginator<ListTrainedModelInferenceJobsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListTrainedModelInferenceJobsCommandInput,
  ListTrainedModelInferenceJobsCommandOutput
>(CleanRoomsMLClient, ListTrainedModelInferenceJobsCommand, "nextToken", "nextToken", "maxResults");
