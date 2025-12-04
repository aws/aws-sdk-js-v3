// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import {
  GetQueryResultsCommand,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
} from "../commands/GetQueryResultsCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetQueryResults: (
  config: CloudTrailPaginationConfiguration,
  input: GetQueryResultsCommandInput,
  ...rest: any[]
) => Paginator<GetQueryResultsCommandOutput> = createPaginator<
  CloudTrailPaginationConfiguration,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput
>(CloudTrailClient, GetQueryResultsCommand, "NextToken", "NextToken", "");
