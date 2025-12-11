// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTagOptionsCommand,
  ListTagOptionsCommandInput,
  ListTagOptionsCommandOutput,
} from "../commands/ListTagOptionsCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTagOptions: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListTagOptionsCommandInput,
  ...rest: any[]
) => Paginator<ListTagOptionsCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListTagOptionsCommandInput,
  ListTagOptionsCommandOutput
>(ServiceCatalogClient, ListTagOptionsCommand, "PageToken", "PageToken", "PageSize");
