// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDataSetExportHistoryCommand,
  ListDataSetExportHistoryCommandInput,
  ListDataSetExportHistoryCommandOutput,
} from "../commands/ListDataSetExportHistoryCommand";
import { M2Client } from "../M2Client";
import { M2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSetExportHistory: (
  config: M2PaginationConfiguration,
  input: ListDataSetExportHistoryCommandInput,
  ...rest: any[]
) => Paginator<ListDataSetExportHistoryCommandOutput> = createPaginator<
  M2PaginationConfiguration,
  ListDataSetExportHistoryCommandInput,
  ListDataSetExportHistoryCommandOutput
>(M2Client, ListDataSetExportHistoryCommand, "nextToken", "nextToken", "maxResults");
