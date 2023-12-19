// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListRobotsCommand, ListRobotsCommandInput, ListRobotsCommandOutput } from "../commands/ListRobotsCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRobots: (
  config: RoboMakerPaginationConfiguration,
  input: ListRobotsCommandInput,
  ...rest: any[]
) => Paginator<ListRobotsCommandOutput> = createPaginator<
  RoboMakerPaginationConfiguration,
  ListRobotsCommandInput,
  ListRobotsCommandOutput
>(RoboMakerClient, ListRobotsCommand, "nextToken", "nextToken", "maxResults");
