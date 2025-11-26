// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceActionsForProvisioningArtifactCommand,
  ListServiceActionsForProvisioningArtifactCommandInput,
  ListServiceActionsForProvisioningArtifactCommandOutput,
} from "../commands/ListServiceActionsForProvisioningArtifactCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceActionsForProvisioningArtifact: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListServiceActionsForProvisioningArtifactCommandInput,
  ...rest: any[]
) => Paginator<ListServiceActionsForProvisioningArtifactCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListServiceActionsForProvisioningArtifactCommandInput,
  ListServiceActionsForProvisioningArtifactCommandOutput
>(ServiceCatalogClient, ListServiceActionsForProvisioningArtifactCommand, "PageToken", "NextPageToken", "PageSize");
