// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { type QueryCommandInput, type QueryCommandOutput, QueryCommand } from "../commands/QueryCommand";
import { DynamoDBDocumentClient } from "../DynamoDBDocumentClient";
import type { DynamoDBDocumentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export type { Paginator };
/**
 * @public
 */
export const paginateQuery: (
  config: DynamoDBDocumentPaginationConfiguration,
  input: QueryCommandInput,
  ...additionalArguments: any
) => Paginator<QueryCommandOutput> = createPaginator<
  DynamoDBDocumentPaginationConfiguration,
  QueryCommandInput,
  QueryCommandOutput
>(DynamoDBDocumentClient, QueryCommand, "ExclusiveStartKey", "LastEvaluatedKey", "Limit");
