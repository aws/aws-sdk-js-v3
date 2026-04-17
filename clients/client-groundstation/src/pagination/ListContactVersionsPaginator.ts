// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContactVersionsCommand,
  ListContactVersionsCommandInput,
  ListContactVersionsCommandOutput,
} from "../commands/ListContactVersionsCommand";
import { GroundStationClient } from "../GroundStationClient";
import type { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContactVersions: (
  config: GroundStationPaginationConfiguration,
  input: ListContactVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListContactVersionsCommandOutput> = createPaginator<
  GroundStationPaginationConfiguration,
  ListContactVersionsCommandInput,
  ListContactVersionsCommandOutput
>(GroundStationClient, ListContactVersionsCommand, "nextToken", "nextToken", "maxResults");
