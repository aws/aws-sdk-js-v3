// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  BatchGetAssetPropertyValueHistoryCommand,
  BatchGetAssetPropertyValueHistoryCommandInput,
  BatchGetAssetPropertyValueHistoryCommandOutput,
} from "../commands/BatchGetAssetPropertyValueHistoryCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateBatchGetAssetPropertyValueHistory: (
  config: IoTSiteWisePaginationConfiguration,
  input: BatchGetAssetPropertyValueHistoryCommandInput,
  ...rest: any[]
) => Paginator<BatchGetAssetPropertyValueHistoryCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  BatchGetAssetPropertyValueHistoryCommandInput,
  BatchGetAssetPropertyValueHistoryCommandOutput
>(IoTSiteWiseClient, BatchGetAssetPropertyValueHistoryCommand, "nextToken", "nextToken", "maxResults");
