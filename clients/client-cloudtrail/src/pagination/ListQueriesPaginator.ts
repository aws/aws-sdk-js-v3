// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import { ListQueriesCommand, ListQueriesCommandInput, ListQueriesCommandOutput } from "../commands/ListQueriesCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueries: (
  config: CloudTrailPaginationConfiguration,
  input: ListQueriesCommandInput,
  ...rest: any[]
) => Paginator<ListQueriesCommandOutput> = createPaginator<
  CloudTrailPaginationConfiguration,
  ListQueriesCommandInput,
  ListQueriesCommandOutput
>(CloudTrailClient, ListQueriesCommand, "NextToken", "NextToken", "MaxResults");
