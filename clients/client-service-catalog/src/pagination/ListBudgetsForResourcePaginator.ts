// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBudgetsForResourceCommand,
  ListBudgetsForResourceCommandInput,
  ListBudgetsForResourceCommandOutput,
} from "../commands/ListBudgetsForResourceCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBudgetsForResource: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListBudgetsForResourceCommandInput,
  ...rest: any[]
) => Paginator<ListBudgetsForResourceCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListBudgetsForResourceCommandInput,
  ListBudgetsForResourceCommandOutput
>(ServiceCatalogClient, ListBudgetsForResourceCommand, "PageToken", "NextPageToken", "PageSize");
