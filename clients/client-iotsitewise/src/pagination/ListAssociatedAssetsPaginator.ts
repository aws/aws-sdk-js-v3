// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssociatedAssetsCommand,
  ListAssociatedAssetsCommandInput,
  ListAssociatedAssetsCommandOutput,
} from "../commands/ListAssociatedAssetsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociatedAssets: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssociatedAssetsCommandInput,
  ...rest: any[]
) => Paginator<ListAssociatedAssetsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListAssociatedAssetsCommandInput,
  ListAssociatedAssetsCommandOutput
>(IoTSiteWiseClient, ListAssociatedAssetsCommand, "nextToken", "nextToken", "maxResults");
