// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListScriptsCommand, ListScriptsCommandInput, ListScriptsCommandOutput } from "../commands/ListScriptsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScripts: (
  config: GameLiftPaginationConfiguration,
  input: ListScriptsCommandInput,
  ...rest: any[]
) => Paginator<ListScriptsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  ListScriptsCommandInput,
  ListScriptsCommandOutput
>(GameLiftClient, ListScriptsCommand, "NextToken", "NextToken", "Limit");
