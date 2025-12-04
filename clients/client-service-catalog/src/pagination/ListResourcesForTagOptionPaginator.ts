// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourcesForTagOptionCommand,
  ListResourcesForTagOptionCommandInput,
  ListResourcesForTagOptionCommandOutput,
} from "../commands/ListResourcesForTagOptionCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourcesForTagOption: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListResourcesForTagOptionCommandInput,
  ...rest: any[]
) => Paginator<ListResourcesForTagOptionCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListResourcesForTagOptionCommandInput,
  ListResourcesForTagOptionCommandOutput
>(ServiceCatalogClient, ListResourcesForTagOptionCommand, "PageToken", "PageToken", "PageSize");
