// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStreamGroupsCommand,
  ListStreamGroupsCommandInput,
  ListStreamGroupsCommandOutput,
} from "../commands/ListStreamGroupsCommand";
import { GameLiftStreamsClient } from "../GameLiftStreamsClient";
import { GameLiftStreamsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreamGroups: (
  config: GameLiftStreamsPaginationConfiguration,
  input: ListStreamGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamGroupsCommandOutput> = createPaginator<
  GameLiftStreamsPaginationConfiguration,
  ListStreamGroupsCommandInput,
  ListStreamGroupsCommandOutput
>(GameLiftStreamsClient, ListStreamGroupsCommand, "NextToken", "NextToken", "MaxResults");
