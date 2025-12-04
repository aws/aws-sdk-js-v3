// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetModelCompositeModelsCommand,
  ListAssetModelCompositeModelsCommandInput,
  ListAssetModelCompositeModelsCommandOutput,
} from "../commands/ListAssetModelCompositeModelsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetModelCompositeModels: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssetModelCompositeModelsCommandInput,
  ...rest: any[]
) => Paginator<ListAssetModelCompositeModelsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListAssetModelCompositeModelsCommandInput,
  ListAssetModelCompositeModelsCommandOutput
>(IoTSiteWiseClient, ListAssetModelCompositeModelsCommand, "nextToken", "nextToken", "maxResults");
