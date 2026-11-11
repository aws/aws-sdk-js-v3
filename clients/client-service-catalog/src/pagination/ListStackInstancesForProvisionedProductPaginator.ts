// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStackInstancesForProvisionedProductCommand,
  ListStackInstancesForProvisionedProductCommandInput,
  ListStackInstancesForProvisionedProductCommandOutput,
} from "../commands/ListStackInstancesForProvisionedProductCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import type { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStackInstancesForProvisionedProduct: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListStackInstancesForProvisionedProductCommandInput,
  ...rest: any[]
) => Paginator<ListStackInstancesForProvisionedProductCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListStackInstancesForProvisionedProductCommandInput,
  ListStackInstancesForProvisionedProductCommandOutput
>(ServiceCatalogClient, ListStackInstancesForProvisionedProductCommand, "PageToken", "NextPageToken", "PageSize");
