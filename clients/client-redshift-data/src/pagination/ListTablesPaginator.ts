// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTables: (
  config: RedshiftDataPaginationConfiguration,
  input: ListTablesCommandInput,
  ...rest: any[]
) => Paginator<ListTablesCommandOutput> = createPaginator<
  RedshiftDataPaginationConfiguration,
  ListTablesCommandInput,
  ListTablesCommandOutput
>(RedshiftDataClient, ListTablesCommand, "NextToken", "NextToken", "MaxResults");
