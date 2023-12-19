// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListStreamingSessionsCommand,
  ListStreamingSessionsCommandInput,
  ListStreamingSessionsCommandOutput,
} from "../commands/ListStreamingSessionsCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreamingSessions: (
  config: NimblePaginationConfiguration,
  input: ListStreamingSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamingSessionsCommandOutput> = createPaginator<
  NimblePaginationConfiguration,
  ListStreamingSessionsCommandInput,
  ListStreamingSessionsCommandOutput
>(NimbleClient, ListStreamingSessionsCommand, "nextToken", "nextToken", "");
