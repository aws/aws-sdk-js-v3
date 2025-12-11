// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataSetImportHistoryCommand,
  ListDataSetImportHistoryCommandInput,
  ListDataSetImportHistoryCommandOutput,
} from "../commands/ListDataSetImportHistoryCommand";
import { M2Client } from "../M2Client";
import { M2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSetImportHistory: (
  config: M2PaginationConfiguration,
  input: ListDataSetImportHistoryCommandInput,
  ...rest: any[]
) => Paginator<ListDataSetImportHistoryCommandOutput> = createPaginator<
  M2PaginationConfiguration,
  ListDataSetImportHistoryCommandInput,
  ListDataSetImportHistoryCommandOutput
>(M2Client, ListDataSetImportHistoryCommand, "nextToken", "nextToken", "maxResults");
