// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListBuildsCommand, ListBuildsCommandInput, ListBuildsCommandOutput } from "../commands/ListBuildsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBuilds: (
  config: GameLiftPaginationConfiguration,
  input: ListBuildsCommandInput,
  ...rest: any[]
) => Paginator<ListBuildsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  ListBuildsCommandInput,
  ListBuildsCommandOutput
>(GameLiftClient, ListBuildsCommand, "NextToken", "NextToken", "Limit");
