// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListQueriesCommand, ListQueriesCommandInput, ListQueriesCommandOutput } from "../commands/ListQueriesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueries: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListQueriesCommandInput,
  ...rest: any[]
) => Paginator<ListQueriesCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListQueriesCommandInput,
  ListQueriesCommandOutput
>(IoTSiteWiseClient, ListQueriesCommand, "nextToken", "nextToken", "maxResults");
