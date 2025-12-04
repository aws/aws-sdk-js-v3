// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListPromptsCommand, ListPromptsCommandInput, ListPromptsCommandOutput } from "../commands/ListPromptsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrompts: (
  config: ConnectPaginationConfiguration,
  input: ListPromptsCommandInput,
  ...rest: any[]
) => Paginator<ListPromptsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListPromptsCommandInput,
  ListPromptsCommandOutput
>(ConnectClient, ListPromptsCommand, "NextToken", "NextToken", "MaxResults");
