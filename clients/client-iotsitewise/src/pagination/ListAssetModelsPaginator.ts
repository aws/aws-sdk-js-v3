// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetModelsCommand,
  ListAssetModelsCommandInput,
  ListAssetModelsCommandOutput,
} from "../commands/ListAssetModelsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetModels: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssetModelsCommandInput,
  ...rest: any[]
) => Paginator<ListAssetModelsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListAssetModelsCommandInput,
  ListAssetModelsCommandOutput
>(IoTSiteWiseClient, ListAssetModelsCommand, "nextToken", "nextToken", "maxResults");
