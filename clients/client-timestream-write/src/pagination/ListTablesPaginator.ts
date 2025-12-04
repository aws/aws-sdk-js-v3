// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { TimestreamWriteClient } from "../TimestreamWriteClient";
import { TimestreamWritePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTables: (
  config: TimestreamWritePaginationConfiguration,
  input: ListTablesCommandInput,
  ...rest: any[]
) => Paginator<ListTablesCommandOutput> = createPaginator<
  TimestreamWritePaginationConfiguration,
  ListTablesCommandInput,
  ListTablesCommandOutput
>(TimestreamWriteClient, ListTablesCommand, "NextToken", "NextToken", "MaxResults");
