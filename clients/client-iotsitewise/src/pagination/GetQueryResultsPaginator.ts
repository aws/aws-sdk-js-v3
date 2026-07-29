// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetQueryResultsCommand,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
} from "../commands/GetQueryResultsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetQueryResults: (
  config: IoTSiteWisePaginationConfiguration,
  input: GetQueryResultsCommandInput,
  ...rest: any[]
) => Paginator<GetQueryResultsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput
>(IoTSiteWiseClient, GetQueryResultsCommand, "nextToken", "nextToken", "maxResults");
