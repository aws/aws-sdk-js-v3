// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAssetPropertyAggregatesCommand,
  GetAssetPropertyAggregatesCommandInput,
  GetAssetPropertyAggregatesCommandOutput,
} from "../commands/GetAssetPropertyAggregatesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAssetPropertyAggregates: (
  config: IoTSiteWisePaginationConfiguration,
  input: GetAssetPropertyAggregatesCommandInput,
  ...rest: any[]
) => Paginator<GetAssetPropertyAggregatesCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  GetAssetPropertyAggregatesCommandInput,
  GetAssetPropertyAggregatesCommandOutput
>(IoTSiteWiseClient, GetAssetPropertyAggregatesCommand, "nextToken", "nextToken", "maxResults");
