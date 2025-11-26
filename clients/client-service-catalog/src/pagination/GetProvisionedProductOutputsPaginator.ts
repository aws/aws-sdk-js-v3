// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetProvisionedProductOutputsCommand,
  GetProvisionedProductOutputsCommandInput,
  GetProvisionedProductOutputsCommandOutput,
} from "../commands/GetProvisionedProductOutputsCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetProvisionedProductOutputs: (
  config: ServiceCatalogPaginationConfiguration,
  input: GetProvisionedProductOutputsCommandInput,
  ...rest: any[]
) => Paginator<GetProvisionedProductOutputsCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  GetProvisionedProductOutputsCommandInput,
  GetProvisionedProductOutputsCommandOutput
>(ServiceCatalogClient, GetProvisionedProductOutputsCommand, "PageToken", "NextPageToken", "PageSize");
