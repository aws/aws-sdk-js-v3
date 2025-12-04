// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetModelPropertiesCommand,
  ListAssetModelPropertiesCommandInput,
  ListAssetModelPropertiesCommandOutput,
} from "../commands/ListAssetModelPropertiesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetModelProperties: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssetModelPropertiesCommandInput,
  ...rest: any[]
) => Paginator<ListAssetModelPropertiesCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListAssetModelPropertiesCommandInput,
  ListAssetModelPropertiesCommandOutput
>(IoTSiteWiseClient, ListAssetModelPropertiesCommand, "nextToken", "nextToken", "maxResults");
