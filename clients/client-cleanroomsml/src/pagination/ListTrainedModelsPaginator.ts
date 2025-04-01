// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListTrainedModelsCommand,
  ListTrainedModelsCommandInput,
  ListTrainedModelsCommandOutput,
} from "../commands/ListTrainedModelsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrainedModels: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListTrainedModelsCommandInput,
  ...rest: any[]
) => Paginator<ListTrainedModelsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListTrainedModelsCommandInput,
  ListTrainedModelsCommandOutput
>(CleanRoomsMLClient, ListTrainedModelsCommand, "nextToken", "nextToken", "maxResults");
