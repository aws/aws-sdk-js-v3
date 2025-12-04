// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPortfoliosCommand,
  ListPortfoliosCommandInput,
  ListPortfoliosCommandOutput,
} from "../commands/ListPortfoliosCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPortfolios: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListPortfoliosCommandInput,
  ...rest: any[]
) => Paginator<ListPortfoliosCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListPortfoliosCommandInput,
  ListPortfoliosCommandOutput
>(ServiceCatalogClient, ListPortfoliosCommand, "PageToken", "NextPageToken", "PageSize");
