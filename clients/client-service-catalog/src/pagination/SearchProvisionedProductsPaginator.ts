// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchProvisionedProductsCommand,
  SearchProvisionedProductsCommandInput,
  SearchProvisionedProductsCommandOutput,
} from "../commands/SearchProvisionedProductsCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchProvisionedProducts: (
  config: ServiceCatalogPaginationConfiguration,
  input: SearchProvisionedProductsCommandInput,
  ...rest: any[]
) => Paginator<SearchProvisionedProductsCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  SearchProvisionedProductsCommandInput,
  SearchProvisionedProductsCommandOutput
>(ServiceCatalogClient, SearchProvisionedProductsCommand, "PageToken", "NextPageToken", "PageSize");
