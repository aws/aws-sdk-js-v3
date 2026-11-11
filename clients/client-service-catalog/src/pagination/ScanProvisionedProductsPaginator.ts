// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ScanProvisionedProductsCommand,
  ScanProvisionedProductsCommandInput,
  ScanProvisionedProductsCommandOutput,
} from "../commands/ScanProvisionedProductsCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import type { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateScanProvisionedProducts: (
  config: ServiceCatalogPaginationConfiguration,
  input: ScanProvisionedProductsCommandInput,
  ...rest: any[]
) => Paginator<ScanProvisionedProductsCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ScanProvisionedProductsCommandInput,
  ScanProvisionedProductsCommandOutput
>(ServiceCatalogClient, ScanProvisionedProductsCommand, "PageToken", "NextPageToken", "PageSize");
