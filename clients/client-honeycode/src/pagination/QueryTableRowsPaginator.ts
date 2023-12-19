// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  QueryTableRowsCommand,
  QueryTableRowsCommandInput,
  QueryTableRowsCommandOutput,
} from "../commands/QueryTableRowsCommand";
import { HoneycodeClient } from "../HoneycodeClient";
import { HoneycodePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateQueryTableRows: (
  config: HoneycodePaginationConfiguration,
  input: QueryTableRowsCommandInput,
  ...rest: any[]
) => Paginator<QueryTableRowsCommandOutput> = createPaginator<
  HoneycodePaginationConfiguration,
  QueryTableRowsCommandInput,
  QueryTableRowsCommandOutput
>(HoneycodeClient, QueryTableRowsCommand, "nextToken", "nextToken", "maxResults");
