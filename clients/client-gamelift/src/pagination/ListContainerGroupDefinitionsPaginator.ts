// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContainerGroupDefinitionsCommand,
  ListContainerGroupDefinitionsCommandInput,
  ListContainerGroupDefinitionsCommandOutput,
} from "../commands/ListContainerGroupDefinitionsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContainerGroupDefinitions: (
  config: GameLiftPaginationConfiguration,
  input: ListContainerGroupDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListContainerGroupDefinitionsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  ListContainerGroupDefinitionsCommandInput,
  ListContainerGroupDefinitionsCommandOutput
>(GameLiftClient, ListContainerGroupDefinitionsCommand, "NextToken", "NextToken", "Limit");
