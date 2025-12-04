// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListKeysCommand, ListKeysCommandInput, ListKeysCommandOutput } from "../commands/ListKeysCommand";
import { KMSClient } from "../KMSClient";
import { KMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKeys: (
  config: KMSPaginationConfiguration,
  input: ListKeysCommandInput,
  ...rest: any[]
) => Paginator<ListKeysCommandOutput> = createPaginator<
  KMSPaginationConfiguration,
  ListKeysCommandInput,
  ListKeysCommandOutput
>(KMSClient, ListKeysCommand, "Marker", "NextMarker", "Limit");
