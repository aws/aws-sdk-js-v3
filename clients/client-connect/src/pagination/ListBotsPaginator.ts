// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBots: (
  config: ConnectPaginationConfiguration,
  input: ListBotsCommandInput,
  ...rest: any[]
) => Paginator<ListBotsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListBotsCommandInput,
  ListBotsCommandOutput
>(ConnectClient, ListBotsCommand, "NextToken", "NextToken", "MaxResults");
