// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrganizationPortfolioAccessCommand,
  ListOrganizationPortfolioAccessCommandInput,
  ListOrganizationPortfolioAccessCommandOutput,
} from "../commands/ListOrganizationPortfolioAccessCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizationPortfolioAccess: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListOrganizationPortfolioAccessCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationPortfolioAccessCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListOrganizationPortfolioAccessCommandInput,
  ListOrganizationPortfolioAccessCommandOutput
>(ServiceCatalogClient, ListOrganizationPortfolioAccessCommand, "PageToken", "NextPageToken", "PageSize");
