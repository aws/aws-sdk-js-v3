// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetMonitorScopeSuggestionsCommand,
  GetMonitorScopeSuggestionsCommandInput,
  GetMonitorScopeSuggestionsCommandOutput,
} from "../commands/GetMonitorScopeSuggestionsCommand";
import { NetworkFlowMonitorClient } from "../NetworkFlowMonitorClient";
import type { NetworkFlowMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetMonitorScopeSuggestions: (
  config: NetworkFlowMonitorPaginationConfiguration,
  input: GetMonitorScopeSuggestionsCommandInput,
  ...rest: any[]
) => Paginator<GetMonitorScopeSuggestionsCommandOutput> = createPaginator<
  NetworkFlowMonitorPaginationConfiguration,
  GetMonitorScopeSuggestionsCommandInput,
  GetMonitorScopeSuggestionsCommandOutput
>(NetworkFlowMonitorClient, GetMonitorScopeSuggestionsCommand, "nextToken", "nextToken", "maxResults");
