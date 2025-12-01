// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProvisioningArtifactsForServiceActionCommand,
  ListProvisioningArtifactsForServiceActionCommandInput,
  ListProvisioningArtifactsForServiceActionCommandOutput,
} from "../commands/ListProvisioningArtifactsForServiceActionCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProvisioningArtifactsForServiceAction: (
  config: ServiceCatalogPaginationConfiguration,
  input: ListProvisioningArtifactsForServiceActionCommandInput,
  ...rest: any[]
) => Paginator<ListProvisioningArtifactsForServiceActionCommandOutput> = createPaginator<
  ServiceCatalogPaginationConfiguration,
  ListProvisioningArtifactsForServiceActionCommandInput,
  ListProvisioningArtifactsForServiceActionCommandOutput
>(ServiceCatalogClient, ListProvisioningArtifactsForServiceActionCommand, "PageToken", "NextPageToken", "PageSize");
