// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRetirableGrantsCommand,
  ListRetirableGrantsCommandInput,
  ListRetirableGrantsCommandOutput,
} from "../commands/ListRetirableGrantsCommand";
import { KMSClient } from "../KMSClient";
import { KMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRetirableGrants: (
  config: KMSPaginationConfiguration,
  input: ListRetirableGrantsCommandInput,
  ...rest: any[]
) => Paginator<ListRetirableGrantsCommandOutput> = createPaginator<
  KMSPaginationConfiguration,
  ListRetirableGrantsCommandInput,
  ListRetirableGrantsCommandOutput
>(KMSClient, ListRetirableGrantsCommand, "Marker", "NextMarker", "Limit");
