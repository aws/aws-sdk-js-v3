// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEntityOwnersCommand,
  ListEntityOwnersCommandInput,
  ListEntityOwnersCommandOutput,
} from "../commands/ListEntityOwnersCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntityOwners: (
  config: DataZonePaginationConfiguration,
  input: ListEntityOwnersCommandInput,
  ...rest: any[]
) => Paginator<ListEntityOwnersCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListEntityOwnersCommandInput,
  ListEntityOwnersCommandOutput
>(DataZoneClient, ListEntityOwnersCommand, "nextToken", "nextToken", "maxResults");
