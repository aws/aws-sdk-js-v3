// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListStreamingSessionBackupsCommand,
  ListStreamingSessionBackupsCommandInput,
  ListStreamingSessionBackupsCommandOutput,
} from "../commands/ListStreamingSessionBackupsCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreamingSessionBackups: (
  config: NimblePaginationConfiguration,
  input: ListStreamingSessionBackupsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamingSessionBackupsCommandOutput> = createPaginator<
  NimblePaginationConfiguration,
  ListStreamingSessionBackupsCommandInput,
  ListStreamingSessionBackupsCommandOutput
>(NimbleClient, ListStreamingSessionBackupsCommand, "nextToken", "nextToken", "");
