// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchGameSessionsCommand,
  SearchGameSessionsCommandInput,
  SearchGameSessionsCommandOutput,
} from "../commands/SearchGameSessionsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchGameSessions: (
  config: GameLiftPaginationConfiguration,
  input: SearchGameSessionsCommandInput,
  ...rest: any[]
) => Paginator<SearchGameSessionsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  SearchGameSessionsCommandInput,
  SearchGameSessionsCommandOutput
>(GameLiftClient, SearchGameSessionsCommand, "NextToken", "NextToken", "Limit");
