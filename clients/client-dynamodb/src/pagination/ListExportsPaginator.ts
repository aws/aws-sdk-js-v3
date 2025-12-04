// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { DynamoDBClient } from "../DynamoDBClient";
import { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExports: (
  config: DynamoDBPaginationConfiguration,
  input: ListExportsCommandInput,
  ...rest: any[]
) => Paginator<ListExportsCommandOutput> = createPaginator<
  DynamoDBPaginationConfiguration,
  ListExportsCommandInput,
  ListExportsCommandOutput
>(DynamoDBClient, ListExportsCommand, "NextToken", "NextToken", "MaxResults");
