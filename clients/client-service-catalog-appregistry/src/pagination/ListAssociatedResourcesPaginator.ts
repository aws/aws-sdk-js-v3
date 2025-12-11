// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssociatedResourcesCommand,
  ListAssociatedResourcesCommandInput,
  ListAssociatedResourcesCommandOutput,
} from "../commands/ListAssociatedResourcesCommand";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociatedResources: (
  config: ServiceCatalogAppRegistryPaginationConfiguration,
  input: ListAssociatedResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListAssociatedResourcesCommandOutput> = createPaginator<
  ServiceCatalogAppRegistryPaginationConfiguration,
  ListAssociatedResourcesCommandInput,
  ListAssociatedResourcesCommandOutput
>(ServiceCatalogAppRegistryClient, ListAssociatedResourcesCommand, "nextToken", "nextToken", "maxResults");
