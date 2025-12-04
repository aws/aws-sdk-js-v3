// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChangeSetsCommand,
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
} from "../commands/ListChangeSetsCommand";
import { MarketplaceCatalogClient } from "../MarketplaceCatalogClient";
import { MarketplaceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChangeSets: (
  config: MarketplaceCatalogPaginationConfiguration,
  input: ListChangeSetsCommandInput,
  ...rest: any[]
) => Paginator<ListChangeSetsCommandOutput> = createPaginator<
  MarketplaceCatalogPaginationConfiguration,
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput
>(MarketplaceCatalogClient, ListChangeSetsCommand, "NextToken", "NextToken", "MaxResults");
