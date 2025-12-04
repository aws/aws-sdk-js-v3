// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  BatchGetAssetPropertyValueCommand,
  BatchGetAssetPropertyValueCommandInput,
  BatchGetAssetPropertyValueCommandOutput,
} from "../commands/BatchGetAssetPropertyValueCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateBatchGetAssetPropertyValue: (
  config: IoTSiteWisePaginationConfiguration,
  input: BatchGetAssetPropertyValueCommandInput,
  ...rest: any[]
) => Paginator<BatchGetAssetPropertyValueCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  BatchGetAssetPropertyValueCommandInput,
  BatchGetAssetPropertyValueCommandOutput
>(IoTSiteWiseClient, BatchGetAssetPropertyValueCommand, "nextToken", "nextToken", "");
