// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTimeSeriesCommand,
  ListTimeSeriesCommandInput,
  ListTimeSeriesCommandOutput,
} from "../commands/ListTimeSeriesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTimeSeries: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListTimeSeriesCommandInput,
  ...rest: any[]
) => Paginator<ListTimeSeriesCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListTimeSeriesCommandInput,
  ListTimeSeriesCommandOutput
>(IoTSiteWiseClient, ListTimeSeriesCommand, "nextToken", "nextToken", "maxResults");
