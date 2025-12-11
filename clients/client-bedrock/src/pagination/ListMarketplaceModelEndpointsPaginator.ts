// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListMarketplaceModelEndpointsCommand,
  ListMarketplaceModelEndpointsCommandInput,
  ListMarketplaceModelEndpointsCommandOutput,
} from "../commands/ListMarketplaceModelEndpointsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMarketplaceModelEndpoints: (
  config: BedrockPaginationConfiguration,
  input: ListMarketplaceModelEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListMarketplaceModelEndpointsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListMarketplaceModelEndpointsCommandInput,
  ListMarketplaceModelEndpointsCommandOutput
>(BedrockClient, ListMarketplaceModelEndpointsCommand, "nextToken", "nextToken", "maxResults");
