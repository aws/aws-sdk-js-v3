// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { S3TablesClient } from "../S3TablesClient";
import { S3TablesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTables: (
  config: S3TablesPaginationConfiguration,
  input: ListTablesCommandInput,
  ...rest: any[]
) => Paginator<ListTablesCommandOutput> = createPaginator<
  S3TablesPaginationConfiguration,
  ListTablesCommandInput,
  ListTablesCommandOutput
>(S3TablesClient, ListTablesCommand, "continuationToken", "continuationToken", "maxTables");
