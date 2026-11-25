// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListProxiesCommand, ListProxiesCommandInput, ListProxiesCommandOutput } from "../commands/ListProxiesCommand";
import { ELBProxyClient } from "../ELBProxyClient";
import type { ELBProxyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProxies: (
  config: ELBProxyPaginationConfiguration,
  input: ListProxiesCommandInput,
  ...rest: any[]
) => Paginator<ListProxiesCommandOutput> = createPaginator<
  ELBProxyPaginationConfiguration,
  ListProxiesCommandInput,
  ListProxiesCommandOutput
>(ELBProxyClient, ListProxiesCommand, "nextToken", "nextToken", "maxResults");
