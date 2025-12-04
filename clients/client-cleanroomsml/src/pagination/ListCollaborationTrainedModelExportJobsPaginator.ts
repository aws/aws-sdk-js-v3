// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListCollaborationTrainedModelExportJobsCommand,
  ListCollaborationTrainedModelExportJobsCommandInput,
  ListCollaborationTrainedModelExportJobsCommandOutput,
} from "../commands/ListCollaborationTrainedModelExportJobsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollaborationTrainedModelExportJobs: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListCollaborationTrainedModelExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListCollaborationTrainedModelExportJobsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListCollaborationTrainedModelExportJobsCommandInput,
  ListCollaborationTrainedModelExportJobsCommandOutput
>(CleanRoomsMLClient, ListCollaborationTrainedModelExportJobsCommand, "nextToken", "nextToken", "maxResults");
