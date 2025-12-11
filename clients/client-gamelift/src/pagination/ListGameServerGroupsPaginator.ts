// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGameServerGroupsCommand,
  ListGameServerGroupsCommandInput,
  ListGameServerGroupsCommandOutput,
} from "../commands/ListGameServerGroupsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGameServerGroups: (
  config: GameLiftPaginationConfiguration,
  input: ListGameServerGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListGameServerGroupsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  ListGameServerGroupsCommandInput,
  ListGameServerGroupsCommandOutput
>(GameLiftClient, ListGameServerGroupsCommand, "NextToken", "NextToken", "Limit");
