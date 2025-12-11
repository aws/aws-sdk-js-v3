// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFleets: (
  config: GameLiftPaginationConfiguration,
  input: ListFleetsCommandInput,
  ...rest: any[]
) => Paginator<ListFleetsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  ListFleetsCommandInput,
  ListFleetsCommandOutput
>(GameLiftClient, ListFleetsCommand, "NextToken", "NextToken", "Limit");
