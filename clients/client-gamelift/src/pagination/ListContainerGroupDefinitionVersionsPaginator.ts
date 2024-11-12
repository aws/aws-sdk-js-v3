// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListContainerGroupDefinitionVersionsCommand,
  ListContainerGroupDefinitionVersionsCommandInput,
  ListContainerGroupDefinitionVersionsCommandOutput,
} from "../commands/ListContainerGroupDefinitionVersionsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContainerGroupDefinitionVersions: (
  config: GameLiftPaginationConfiguration,
  input: ListContainerGroupDefinitionVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListContainerGroupDefinitionVersionsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  ListContainerGroupDefinitionVersionsCommandInput,
  ListContainerGroupDefinitionVersionsCommandOutput
>(GameLiftClient, ListContainerGroupDefinitionVersionsCommand, "NextToken", "NextToken", "Limit");
