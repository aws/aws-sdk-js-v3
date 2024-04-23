// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListRobotApplicationsCommand,
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput,
} from "../commands/ListRobotApplicationsCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRobotApplications: (
  config: RoboMakerPaginationConfiguration,
  input: ListRobotApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListRobotApplicationsCommandOutput> = createPaginator<
  RoboMakerPaginationConfiguration,
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput
>(RoboMakerClient, ListRobotApplicationsCommand, "nextToken", "nextToken", "maxResults");
