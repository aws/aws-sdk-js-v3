// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetPropertiesCommand,
  ListAssetPropertiesCommandInput,
  ListAssetPropertiesCommandOutput,
} from "../commands/ListAssetPropertiesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetProperties: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssetPropertiesCommandInput,
  ...rest: any[]
) => Paginator<ListAssetPropertiesCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListAssetPropertiesCommandInput,
  ListAssetPropertiesCommandOutput
>(IoTSiteWiseClient, ListAssetPropertiesCommand, "nextToken", "nextToken", "maxResults");
