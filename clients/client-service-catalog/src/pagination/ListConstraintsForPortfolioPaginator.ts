// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConstraintsForPortfolioCommand,
  ListConstraintsForPortfolioCommandInput,
  ListConstraintsForPortfolioCommandOutput,
} from "../commands/ListConstraintsForPortfolioCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConstraintsForPortfolio: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListConstraintsForPortfolioCommandInput,
  ...rest: any[]
) => Paginator<ListConstraintsForPortfolioCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListConstraintsForPortfolioCommandInput,
  ListConstraintsForPortfolioCommandOutput
>(ServiceCatalogClient, ListConstraintsForPortfolioCommand, "PageToken", "NextPageToken", "PageSize");
