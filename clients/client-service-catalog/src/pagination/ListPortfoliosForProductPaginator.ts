// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPortfoliosForProductCommand,
  ListPortfoliosForProductCommandInput,
  ListPortfoliosForProductCommandOutput,
} from "../commands/ListPortfoliosForProductCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPortfoliosForProduct: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListPortfoliosForProductCommandInput,
  ...rest: any[]
) => Paginator<ListPortfoliosForProductCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListPortfoliosForProductCommandInput,
  ListPortfoliosForProductCommandOutput
>(ServiceCatalogClient, ListPortfoliosForProductCommand, "PageToken", "NextPageToken", "PageSize");
