// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplications: (
  config: ServiceCatalogAppRegistryPaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationsCommandOutput> = createPaginator<
  ServiceCatalogAppRegistryPaginationConfiguration,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
>(ServiceCatalogAppRegistryClient, ListApplicationsCommand, "nextToken", "nextToken", "maxResults");
