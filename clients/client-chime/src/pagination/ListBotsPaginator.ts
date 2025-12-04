// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBots: (
  config: ChimePaginationConfiguration,
  input: ListBotsCommandInput,
  ...rest: any[]
) => Paginator<ListBotsCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListBotsCommandInput,
  ListBotsCommandOutput
>(ChimeClient, ListBotsCommand, "NextToken", "NextToken", "MaxResults");
