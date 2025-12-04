// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListImportsCommand, ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import { DynamoDBClient } from "../DynamoDBClient";
import { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImports: (
  config: DynamoDBPaginationConfiguration,
  input: ListImportsCommandInput,
  ...rest: any[]
) => Paginator<ListImportsCommandOutput> = createPaginator<
  DynamoDBPaginationConfiguration,
  ListImportsCommandInput,
  ListImportsCommandOutput
>(DynamoDBClient, ListImportsCommand, "NextToken", "NextToken", "PageSize");
