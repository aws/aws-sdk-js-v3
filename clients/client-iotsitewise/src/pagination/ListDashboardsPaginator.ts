// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "../commands/ListDashboardsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDashboards: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListDashboardsCommandInput,
  ...rest: any[]
) => Paginator<ListDashboardsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput
>(IoTSiteWiseClient, ListDashboardsCommand, "nextToken", "nextToken", "maxResults");
