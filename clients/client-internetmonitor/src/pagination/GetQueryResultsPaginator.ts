// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetQueryResultsCommand,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
} from "../commands/GetQueryResultsCommand";
import { InternetMonitorClient } from "../InternetMonitorClient";
import { InternetMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetQueryResults: (
  config: InternetMonitorPaginationConfiguration,
  input: GetQueryResultsCommandInput,
  ...rest: any[]
) => Paginator<GetQueryResultsCommandOutput> = createPaginator<
  InternetMonitorPaginationConfiguration,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput
>(InternetMonitorClient, GetQueryResultsCommand, "NextToken", "NextToken", "MaxResults");
