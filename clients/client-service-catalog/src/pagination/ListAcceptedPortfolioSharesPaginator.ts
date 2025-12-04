// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAcceptedPortfolioSharesCommand,
  ListAcceptedPortfolioSharesCommandInput,
  ListAcceptedPortfolioSharesCommandOutput,
} from "../commands/ListAcceptedPortfolioSharesCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAcceptedPortfolioShares: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListAcceptedPortfolioSharesCommandInput,
  ...rest: any[]
) => Paginator<ListAcceptedPortfolioSharesCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListAcceptedPortfolioSharesCommandInput,
  ListAcceptedPortfolioSharesCommandOutput
>(ServiceCatalogClient, ListAcceptedPortfolioSharesCommand, "PageToken", "NextPageToken", "PageSize");
