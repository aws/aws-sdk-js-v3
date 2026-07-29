// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStreamUrlsCommand,
  ListStreamUrlsCommandInput,
  ListStreamUrlsCommandOutput,
} from "../commands/ListStreamUrlsCommand";
import { GameLiftStreamsClient } from "../GameLiftStreamsClient";
import type { GameLiftStreamsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreamUrls: (
  config: GameLiftStreamsPaginationConfiguration,
  input: ListStreamUrlsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamUrlsCommandOutput> = createPaginator<
  GameLiftStreamsPaginationConfiguration,
  ListStreamUrlsCommandInput,
  ListStreamUrlsCommandOutput
>(GameLiftStreamsClient, ListStreamUrlsCommand, "NextToken", "NextToken", "MaxResults");
