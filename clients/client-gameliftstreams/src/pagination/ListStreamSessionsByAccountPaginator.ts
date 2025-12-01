// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStreamSessionsByAccountCommand,
  ListStreamSessionsByAccountCommandInput,
  ListStreamSessionsByAccountCommandOutput,
} from "../commands/ListStreamSessionsByAccountCommand";
import { GameLiftStreamsClient } from "../GameLiftStreamsClient";
import { GameLiftStreamsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreamSessionsByAccount: (
  config: GameLiftStreamsPaginationConfiguration,
  input: ListStreamSessionsByAccountCommandInput,
  ...rest: any[]
) => Paginator<ListStreamSessionsByAccountCommandOutput> = createPaginator<
  GameLiftStreamsPaginationConfiguration,
  ListStreamSessionsByAccountCommandInput,
  ListStreamSessionsByAccountCommandOutput
>(GameLiftStreamsClient, ListStreamSessionsByAccountCommand, "NextToken", "NextToken", "MaxResults");
