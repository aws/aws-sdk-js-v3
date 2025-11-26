// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPortfolioAccessCommand,
  ListPortfolioAccessCommandInput,
  ListPortfolioAccessCommandOutput,
} from "../commands/ListPortfolioAccessCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPortfolioAccess: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListPortfolioAccessCommandInput,
  ...rest: any[]
) => Paginator<ListPortfolioAccessCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListPortfolioAccessCommandInput,
  ListPortfolioAccessCommandOutput
>(ServiceCatalogClient, ListPortfolioAccessCommand, "PageToken", "NextPageToken", "PageSize");
