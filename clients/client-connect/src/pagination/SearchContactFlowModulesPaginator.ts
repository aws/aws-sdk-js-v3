// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchContactFlowModulesCommand,
  SearchContactFlowModulesCommandInput,
  SearchContactFlowModulesCommandOutput,
} from "../commands/SearchContactFlowModulesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchContactFlowModules: (
  config: ConnectPaginationConfiguration,
  input: SearchContactFlowModulesCommandInput,
  ...rest: any[]
) => Paginator<SearchContactFlowModulesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchContactFlowModulesCommandInput,
  SearchContactFlowModulesCommandOutput
>(ConnectClient, SearchContactFlowModulesCommand, "NextToken", "NextToken", "MaxResults");
