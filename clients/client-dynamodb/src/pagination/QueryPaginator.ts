// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "../commands/QueryCommand";
import { DynamoDBClient } from "../DynamoDBClient";
import { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateQuery: (
  config: DynamoDBPaginationConfiguration,
  input: QueryCommandInput,
  ...rest: any[]
) => Paginator<QueryCommandOutput> = createPaginator<
  DynamoDBPaginationConfiguration,
  QueryCommandInput,
  QueryCommandOutput
>(DynamoDBClient, QueryCommand, "ExclusiveStartKey", "LastEvaluatedKey", "Limit");
