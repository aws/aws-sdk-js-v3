// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListSimulationJobBatchesCommand,
  ListSimulationJobBatchesCommandInput,
  ListSimulationJobBatchesCommandOutput,
} from "../commands/ListSimulationJobBatchesCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSimulationJobBatches: (
  config: RoboMakerPaginationConfiguration,
  input: ListSimulationJobBatchesCommandInput,
  ...rest: any[]
) => Paginator<ListSimulationJobBatchesCommandOutput> = createPaginator<
  RoboMakerPaginationConfiguration,
  ListSimulationJobBatchesCommandInput,
  ListSimulationJobBatchesCommandOutput
>(RoboMakerClient, ListSimulationJobBatchesCommand, "nextToken", "nextToken", "maxResults");
