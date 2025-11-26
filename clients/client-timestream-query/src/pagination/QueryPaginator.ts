// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "../commands/QueryCommand";
import { TimestreamQueryClient } from "../TimestreamQueryClient";
import { TimestreamQueryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateQuery: (
  config: TimestreamQueryPaginationConfiguration,
  input: QueryCommandInput,
  ...rest: any[]
) => Paginator<QueryCommandOutput> = createPaginator<
  TimestreamQueryPaginationConfiguration,
  QueryCommandInput,
  QueryCommandOutput
>(TimestreamQueryClient, QueryCommand, "NextToken", "NextToken", "MaxRows");
