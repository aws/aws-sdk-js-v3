// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProxyUpdatesCommand,
  ListProxyUpdatesCommandInput,
  ListProxyUpdatesCommandOutput,
} from "../commands/ListProxyUpdatesCommand";
import { ELBProxyClient } from "../ELBProxyClient";
import type { ELBProxyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProxyUpdates: (
  config: ELBProxyPaginationConfiguration,
  input: ListProxyUpdatesCommandInput,
  ...rest: any[]
) => Paginator<ListProxyUpdatesCommandOutput> = createPaginator<
  ELBProxyPaginationConfiguration,
  ListProxyUpdatesCommandInput,
  ListProxyUpdatesCommandOutput
>(ELBProxyClient, ListProxyUpdatesCommand, "nextToken", "nextToken", "maxResults");
