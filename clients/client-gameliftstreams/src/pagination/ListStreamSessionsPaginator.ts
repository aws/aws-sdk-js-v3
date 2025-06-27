// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListStreamSessionsCommand,
  ListStreamSessionsCommandInput,
  ListStreamSessionsCommandOutput,
} from "../commands/ListStreamSessionsCommand";
import { GameLiftStreamsClient } from "../GameLiftStreamsClient";
import { GameLiftStreamsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreamSessions: (
  config: GameLiftStreamsPaginationConfiguration,
  input: ListStreamSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamSessionsCommandOutput> = createPaginator<
  GameLiftStreamsPaginationConfiguration,
  ListStreamSessionsCommandInput,
  ListStreamSessionsCommandOutput
>(GameLiftStreamsClient, ListStreamSessionsCommand, "NextToken", "NextToken", "MaxResults");
