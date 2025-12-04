// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataLakeExceptionsCommand,
  ListDataLakeExceptionsCommandInput,
  ListDataLakeExceptionsCommandOutput,
} from "../commands/ListDataLakeExceptionsCommand";
import { SecurityLakeClient } from "../SecurityLakeClient";
import { SecurityLakePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataLakeExceptions: (
  config: SecurityLakePaginationConfiguration,
  input: ListDataLakeExceptionsCommandInput,
  ...rest: any[]
) => Paginator<ListDataLakeExceptionsCommandOutput> = createPaginator<
  SecurityLakePaginationConfiguration,
  ListDataLakeExceptionsCommandInput,
  ListDataLakeExceptionsCommandOutput
>(SecurityLakeClient, ListDataLakeExceptionsCommand, "nextToken", "nextToken", "maxResults");
