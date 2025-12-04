// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListTrainingDatasetsCommand,
  ListTrainingDatasetsCommandInput,
  ListTrainingDatasetsCommandOutput,
} from "../commands/ListTrainingDatasetsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrainingDatasets: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListTrainingDatasetsCommandInput,
  ...rest: any[]
) => Paginator<ListTrainingDatasetsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListTrainingDatasetsCommandInput,
  ListTrainingDatasetsCommandOutput
>(CleanRoomsMLClient, ListTrainingDatasetsCommand, "nextToken", "nextToken", "maxResults");
