// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListContainerFleetsCommand,
  ListContainerFleetsCommandInput,
  ListContainerFleetsCommandOutput,
} from "../commands/ListContainerFleetsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContainerFleets: (
  config: GameLiftPaginationConfiguration,
  input: ListContainerFleetsCommandInput,
  ...rest: any[]
) => Paginator<ListContainerFleetsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  ListContainerFleetsCommandInput,
  ListContainerFleetsCommandOutput
>(GameLiftClient, ListContainerFleetsCommand, "NextToken", "NextToken", "Limit");
