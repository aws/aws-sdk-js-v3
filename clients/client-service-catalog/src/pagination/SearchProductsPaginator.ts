// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchProductsCommand,
  SearchProductsCommandInput,
  SearchProductsCommandOutput,
} from "../commands/SearchProductsCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchProducts: (
  config: ServiceCatalogPaginationConfiguration,
  input: SearchProductsCommandInput,
  ...rest: any[]
) => Paginator<SearchProductsCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  SearchProductsCommandInput,
  SearchProductsCommandOutput
>(ServiceCatalogClient, SearchProductsCommand, "PageToken", "NextPageToken", "PageSize");
