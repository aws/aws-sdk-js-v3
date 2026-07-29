// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSearchesCommand,
  ListSearchesCommandInput,
  ListSearchesCommandOutput,
} from "../commands/ListSearchesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSearches: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListSearchesCommandInput,
  ...rest: any[]
) => Paginator<ListSearchesCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListSearchesCommandInput,
  ListSearchesCommandOutput
>(IoTSiteWiseClient, ListSearchesCommand, "nextToken", "nextToken", "maxResults");
