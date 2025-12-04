// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAssetPropertyValueHistoryCommand,
  GetAssetPropertyValueHistoryCommandInput,
  GetAssetPropertyValueHistoryCommandOutput,
} from "../commands/GetAssetPropertyValueHistoryCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAssetPropertyValueHistory: (
  config: IoTSiteWisePaginationConfiguration,
  input: GetAssetPropertyValueHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetAssetPropertyValueHistoryCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  GetAssetPropertyValueHistoryCommandInput,
  GetAssetPropertyValueHistoryCommandOutput
>(IoTSiteWiseClient, GetAssetPropertyValueHistoryCommand, "nextToken", "nextToken", "maxResults");
