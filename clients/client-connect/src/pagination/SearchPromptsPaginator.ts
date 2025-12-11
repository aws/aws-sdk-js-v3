// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchPromptsCommand,
  SearchPromptsCommandInput,
  SearchPromptsCommandOutput,
} from "../commands/SearchPromptsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchPrompts: (
  config: ConnectPaginationConfiguration,
  input: SearchPromptsCommandInput,
  ...rest: any[]
) => Paginator<SearchPromptsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchPromptsCommandInput,
  SearchPromptsCommandOutput
>(ConnectClient, SearchPromptsCommand, "NextToken", "NextToken", "MaxResults");
