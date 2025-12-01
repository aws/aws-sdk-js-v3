// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchQuickConnectsCommand,
  SearchQuickConnectsCommandInput,
  SearchQuickConnectsCommandOutput,
} from "../commands/SearchQuickConnectsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchQuickConnects: (
  config: ConnectPaginationConfiguration,
  input: SearchQuickConnectsCommandInput,
  ...rest: any[]
) => Paginator<SearchQuickConnectsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchQuickConnectsCommandInput,
  SearchQuickConnectsCommandOutput
>(ConnectClient, SearchQuickConnectsCommand, "NextToken", "NextToken", "MaxResults");
