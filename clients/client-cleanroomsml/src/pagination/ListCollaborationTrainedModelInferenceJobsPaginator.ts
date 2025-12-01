// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListCollaborationTrainedModelInferenceJobsCommand,
  ListCollaborationTrainedModelInferenceJobsCommandInput,
  ListCollaborationTrainedModelInferenceJobsCommandOutput,
} from "../commands/ListCollaborationTrainedModelInferenceJobsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollaborationTrainedModelInferenceJobs: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListCollaborationTrainedModelInferenceJobsCommandInput,
  ...rest: any[]
) => Paginator<ListCollaborationTrainedModelInferenceJobsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListCollaborationTrainedModelInferenceJobsCommandInput,
  ListCollaborationTrainedModelInferenceJobsCommandOutput
>(CleanRoomsMLClient, ListCollaborationTrainedModelInferenceJobsCommand, "nextToken", "nextToken", "maxResults");
