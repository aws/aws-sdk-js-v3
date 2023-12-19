// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFleets: (
  config: RoboMakerPaginationConfiguration,
  input: ListFleetsCommandInput,
  ...rest: any[]
) => Paginator<ListFleetsCommandOutput> = createPaginator<
  RoboMakerPaginationConfiguration,
  ListFleetsCommandInput,
  ListFleetsCommandOutput
>(RoboMakerClient, ListFleetsCommand, "nextToken", "nextToken", "maxResults");
