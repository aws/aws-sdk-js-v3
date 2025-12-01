// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BCMDataExportsClient } from "../BCMDataExportsClient";
import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { BCMDataExportsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTables: (
  config: BCMDataExportsPaginationConfiguration,
  input: ListTablesCommandInput,
  ...rest: any[]
) => Paginator<ListTablesCommandOutput> = createPaginator<
  BCMDataExportsPaginationConfiguration,
  ListTablesCommandInput,
  ListTablesCommandOutput
>(BCMDataExportsClient, ListTablesCommand, "NextToken", "NextToken", "MaxResults");
