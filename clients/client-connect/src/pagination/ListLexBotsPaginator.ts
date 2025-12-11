// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListLexBotsCommand, ListLexBotsCommandInput, ListLexBotsCommandOutput } from "../commands/ListLexBotsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLexBots: (
  config: ConnectPaginationConfiguration,
  input: ListLexBotsCommandInput,
  ...rest: any[]
) => Paginator<ListLexBotsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListLexBotsCommandInput,
  ListLexBotsCommandOutput
>(ConnectClient, ListLexBotsCommand, "NextToken", "NextToken", "MaxResults");
