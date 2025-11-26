// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { DynamoDBClient } from "../DynamoDBClient";
import { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTables: (
  config: DynamoDBPaginationConfiguration,
  input: ListTablesCommandInput,
  ...rest: any[]
) => Paginator<ListTablesCommandOutput> = createPaginator<
  DynamoDBPaginationConfiguration,
  ListTablesCommandInput,
  ListTablesCommandOutput
>(DynamoDBClient, ListTablesCommand, "ExclusiveStartTableName", "LastEvaluatedTableName", "Limit");
