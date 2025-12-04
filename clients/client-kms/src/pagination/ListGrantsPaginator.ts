// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListGrantsCommand, ListGrantsCommandInput, ListGrantsCommandOutput } from "../commands/ListGrantsCommand";
import { KMSClient } from "../KMSClient";
import { KMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGrants: (
  config: KMSPaginationConfiguration,
  input: ListGrantsCommandInput,
  ...rest: any[]
) => Paginator<ListGrantsCommandOutput> = createPaginator<
  KMSPaginationConfiguration,
  ListGrantsCommandInput,
  ListGrantsCommandOutput
>(KMSClient, ListGrantsCommand, "Marker", "NextMarker", "Limit");
