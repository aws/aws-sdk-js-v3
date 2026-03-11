// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { SimpleDBv2Client } from "../SimpleDBv2Client";
import { SimpleDBv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExports: (
  config: SimpleDBv2PaginationConfiguration,
  input: ListExportsCommandInput,
  ...rest: any[]
) => Paginator<ListExportsCommandOutput> = createPaginator<
  SimpleDBv2PaginationConfiguration,
  ListExportsCommandInput,
  ListExportsCommandOutput
>(SimpleDBv2Client, ListExportsCommand, "nextToken", "nextToken", "maxResults");
