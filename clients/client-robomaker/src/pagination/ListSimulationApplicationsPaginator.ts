// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListSimulationApplicationsCommand,
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput,
} from "../commands/ListSimulationApplicationsCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSimulationApplications: (
  config: RoboMakerPaginationConfiguration,
  input: ListSimulationApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListSimulationApplicationsCommandOutput> = createPaginator<
  RoboMakerPaginationConfiguration,
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput
>(RoboMakerClient, ListSimulationApplicationsCommand, "nextToken", "nextToken", "maxResults");
