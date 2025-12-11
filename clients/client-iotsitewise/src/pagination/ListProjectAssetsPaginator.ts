// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProjectAssetsCommand,
  ListProjectAssetsCommandInput,
  ListProjectAssetsCommandOutput,
} from "../commands/ListProjectAssetsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProjectAssets: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListProjectAssetsCommandInput,
  ...rest: any[]
) => Paginator<ListProjectAssetsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListProjectAssetsCommandInput,
  ListProjectAssetsCommandOutput
>(IoTSiteWiseClient, ListProjectAssetsCommand, "nextToken", "nextToken", "maxResults");
