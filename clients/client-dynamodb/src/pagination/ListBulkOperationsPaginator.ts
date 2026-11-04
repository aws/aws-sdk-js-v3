// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBulkOperationsCommand,
  ListBulkOperationsCommandInput,
  ListBulkOperationsCommandOutput,
} from "../commands/ListBulkOperationsCommand";
import { DynamoDBClient } from "../DynamoDBClient";
import type { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBulkOperations: (
  config: DynamoDBPaginationConfiguration,
  input: ListBulkOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListBulkOperationsCommandOutput> = createPaginator<
  DynamoDBPaginationConfiguration,
  ListBulkOperationsCommandInput,
  ListBulkOperationsCommandOutput
>(DynamoDBClient, ListBulkOperationsCommand, "NextToken", "NextToken", "MaxResults");
