// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListScheduledQueriesCommand,
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput,
} from "../commands/ListScheduledQueriesCommand";
import { TimestreamQueryClient } from "../TimestreamQueryClient";
import { TimestreamQueryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScheduledQueries: (
  config: TimestreamQueryPaginationConfiguration,
  input: ListScheduledQueriesCommandInput,
  ...rest: any[]
) => Paginator<ListScheduledQueriesCommandOutput> = createPaginator<
  TimestreamQueryPaginationConfiguration,
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput
>(TimestreamQueryClient, ListScheduledQueriesCommand, "NextToken", "NextToken", "MaxResults");
