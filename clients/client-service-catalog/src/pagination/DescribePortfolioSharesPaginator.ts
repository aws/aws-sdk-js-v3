// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePortfolioSharesCommand,
  DescribePortfolioSharesCommandInput,
  DescribePortfolioSharesCommandOutput,
} from "../commands/DescribePortfolioSharesCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePortfolioShares: (
  config: ServiceCatalogPaginationConfiguration,
  input: DescribePortfolioSharesCommandInput,
  ...rest: any[]
) => Paginator<DescribePortfolioSharesCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  DescribePortfolioSharesCommandInput,
  DescribePortfolioSharesCommandOutput
>(ServiceCatalogClient, DescribePortfolioSharesCommand, "PageToken", "NextPageToken", "PageSize");
