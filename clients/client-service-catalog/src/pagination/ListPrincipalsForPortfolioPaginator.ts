// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPrincipalsForPortfolioCommand,
  ListPrincipalsForPortfolioCommandInput,
  ListPrincipalsForPortfolioCommandOutput,
} from "../commands/ListPrincipalsForPortfolioCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrincipalsForPortfolio: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListPrincipalsForPortfolioCommandInput,
  ...rest: any[]
) => Paginator<ListPrincipalsForPortfolioCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListPrincipalsForPortfolioCommandInput,
  ListPrincipalsForPortfolioCommandOutput
>(ServiceCatalogClient, ListPrincipalsForPortfolioCommand, "PageToken", "NextPageToken", "PageSize");
