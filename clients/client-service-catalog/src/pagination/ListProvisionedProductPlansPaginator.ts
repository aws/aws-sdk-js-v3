// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProvisionedProductPlansCommand,
  ListProvisionedProductPlansCommandInput,
  ListProvisionedProductPlansCommandOutput,
} from "../commands/ListProvisionedProductPlansCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import type { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProvisionedProductPlans: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListProvisionedProductPlansCommandInput,
  ...rest: any[]
) => Paginator<ListProvisionedProductPlansCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListProvisionedProductPlansCommandInput,
  ListProvisionedProductPlansCommandOutput
>(ServiceCatalogClient, ListProvisionedProductPlansCommand, "PageToken", "NextPageToken", "PageSize");
