// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListCollaborationTrainedModelsCommand,
  ListCollaborationTrainedModelsCommandInput,
  ListCollaborationTrainedModelsCommandOutput,
} from "../commands/ListCollaborationTrainedModelsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollaborationTrainedModels: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListCollaborationTrainedModelsCommandInput,
  ...rest: any[]
) => Paginator<ListCollaborationTrainedModelsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListCollaborationTrainedModelsCommandInput,
  ListCollaborationTrainedModelsCommandOutput
>(CleanRoomsMLClient, ListCollaborationTrainedModelsCommand, "nextToken", "nextToken", "maxResults");
