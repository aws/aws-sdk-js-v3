// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchProductsAsAdminCommand,
  SearchProductsAsAdminCommandInput,
  SearchProductsAsAdminCommandOutput,
} from "../commands/SearchProductsAsAdminCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchProductsAsAdmin: (
  config: ServiceCatalogPaginationConfiguration,
  input: SearchProductsAsAdminCommandInput,
  ...rest: any[]
) => Paginator<SearchProductsAsAdminCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  SearchProductsAsAdminCommandInput,
  SearchProductsAsAdminCommandOutput
>(ServiceCatalogClient, SearchProductsAsAdminCommand, "PageToken", "NextPageToken", "PageSize");
