// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGameServersCommand,
  ListGameServersCommandInput,
  ListGameServersCommandOutput,
} from "../commands/ListGameServersCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGameServers: (
  config: GameLiftPaginationConfiguration,
  input: ListGameServersCommandInput,
  ...rest: any[]
) => Paginator<ListGameServersCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  ListGameServersCommandInput,
  ListGameServersCommandOutput
>(GameLiftClient, ListGameServersCommand, "NextToken", "NextToken", "Limit");
