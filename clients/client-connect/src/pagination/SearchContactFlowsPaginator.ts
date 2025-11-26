// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchContactFlowsCommand,
  SearchContactFlowsCommandInput,
  SearchContactFlowsCommandOutput,
} from "../commands/SearchContactFlowsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchContactFlows: (
  config: ConnectPaginationConfiguration,
  input: SearchContactFlowsCommandInput,
  ...rest: any[]
) => Paginator<SearchContactFlowsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchContactFlowsCommandInput,
  SearchContactFlowsCommandOutput
>(ConnectClient, SearchContactFlowsCommand, "NextToken", "NextToken", "MaxResults");
