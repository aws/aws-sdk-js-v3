// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAssetsCommand, ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssets: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssetsCommandInput,
  ...rest: any[]
) => Paginator<ListAssetsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListAssetsCommandInput,
  ListAssetsCommandOutput
>(IoTSiteWiseClient, ListAssetsCommand, "nextToken", "nextToken", "maxResults");
