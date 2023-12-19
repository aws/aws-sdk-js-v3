// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListSimulationJobsCommand,
  ListSimulationJobsCommandInput,
  ListSimulationJobsCommandOutput,
} from "../commands/ListSimulationJobsCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSimulationJobs: (
  config: RoboMakerPaginationConfiguration,
  input: ListSimulationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListSimulationJobsCommandOutput> = createPaginator<
  RoboMakerPaginationConfiguration,
  ListSimulationJobsCommandInput,
  ListSimulationJobsCommandOutput
>(RoboMakerClient, ListSimulationJobsCommand, "nextToken", "nextToken", "maxResults");
