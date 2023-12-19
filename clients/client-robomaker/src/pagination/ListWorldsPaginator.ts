// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListWorldsCommand, ListWorldsCommandInput, ListWorldsCommandOutput } from "../commands/ListWorldsCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorlds: (
  config: RoboMakerPaginationConfiguration,
  input: ListWorldsCommandInput,
  ...rest: any[]
) => Paginator<ListWorldsCommandOutput> = createPaginator<
  RoboMakerPaginationConfiguration,
  ListWorldsCommandInput,
  ListWorldsCommandOutput
>(RoboMakerClient, ListWorldsCommand, "nextToken", "nextToken", "maxResults");
