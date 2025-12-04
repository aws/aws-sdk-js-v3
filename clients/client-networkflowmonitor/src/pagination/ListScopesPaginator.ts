// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListScopesCommand, ListScopesCommandInput, ListScopesCommandOutput } from "../commands/ListScopesCommand";
import { NetworkFlowMonitorClient } from "../NetworkFlowMonitorClient";
import { NetworkFlowMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScopes: (
  config: NetworkFlowMonitorPaginationConfiguration,
  input: ListScopesCommandInput,
  ...rest: any[]
) => Paginator<ListScopesCommandOutput> = createPaginator<
  NetworkFlowMonitorPaginationConfiguration,
  ListScopesCommandInput,
  ListScopesCommandOutput
>(NetworkFlowMonitorClient, ListScopesCommand, "nextToken", "nextToken", "maxResults");
