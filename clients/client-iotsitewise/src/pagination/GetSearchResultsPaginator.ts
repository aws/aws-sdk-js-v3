// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSearchResultsCommand,
  GetSearchResultsCommandInput,
  GetSearchResultsCommandOutput,
} from "../commands/GetSearchResultsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSearchResults: (
  config: IoTSiteWisePaginationConfiguration,
  input: GetSearchResultsCommandInput,
  ...rest: any[]
) => Paginator<GetSearchResultsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  GetSearchResultsCommandInput,
  GetSearchResultsCommandOutput
>(IoTSiteWiseClient, GetSearchResultsCommand, "nextToken", "nextToken", "maxResults");
