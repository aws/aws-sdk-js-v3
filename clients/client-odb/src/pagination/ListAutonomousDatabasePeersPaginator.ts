// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAutonomousDatabasePeersCommand,
  ListAutonomousDatabasePeersCommandInput,
  ListAutonomousDatabasePeersCommandOutput,
} from "../commands/ListAutonomousDatabasePeersCommand";
import { OdbClient } from "../OdbClient";
import type { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutonomousDatabasePeers: (
  config: OdbPaginationConfiguration,
  input: ListAutonomousDatabasePeersCommandInput,
  ...rest: any[]
) => Paginator<ListAutonomousDatabasePeersCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListAutonomousDatabasePeersCommandInput,
  ListAutonomousDatabasePeersCommandOutput
>(OdbClient, ListAutonomousDatabasePeersCommand, "nextToken", "nextToken", "maxResults");
