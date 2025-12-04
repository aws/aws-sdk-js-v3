// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  BatchGetAssetPropertyAggregatesCommand,
  BatchGetAssetPropertyAggregatesCommandInput,
  BatchGetAssetPropertyAggregatesCommandOutput,
} from "../commands/BatchGetAssetPropertyAggregatesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateBatchGetAssetPropertyAggregates: (
  config: IoTSiteWisePaginationConfiguration,
  input: BatchGetAssetPropertyAggregatesCommandInput,
  ...rest: any[]
) => Paginator<BatchGetAssetPropertyAggregatesCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  BatchGetAssetPropertyAggregatesCommandInput,
  BatchGetAssetPropertyAggregatesCommandOutput
>(IoTSiteWiseClient, BatchGetAssetPropertyAggregatesCommand, "nextToken", "nextToken", "maxResults");
