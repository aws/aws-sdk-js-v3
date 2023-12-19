// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDeploymentJobsCommand,
  ListDeploymentJobsCommandInput,
  ListDeploymentJobsCommandOutput,
} from "../commands/ListDeploymentJobsCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeploymentJobs: (
  config: RoboMakerPaginationConfiguration,
  input: ListDeploymentJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentJobsCommandOutput> = createPaginator<
  RoboMakerPaginationConfiguration,
  ListDeploymentJobsCommandInput,
  ListDeploymentJobsCommandOutput
>(RoboMakerClient, ListDeploymentJobsCommand, "nextToken", "nextToken", "maxResults");
