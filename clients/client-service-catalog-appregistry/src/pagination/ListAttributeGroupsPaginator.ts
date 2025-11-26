// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAttributeGroupsCommand,
  ListAttributeGroupsCommandInput,
  ListAttributeGroupsCommandOutput,
} from "../commands/ListAttributeGroupsCommand";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttributeGroups: (
  config: ServiceCatalogAppRegistryPaginationConfiguration,
  input: ListAttributeGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListAttributeGroupsCommandOutput> = createPaginator<
  ServiceCatalogAppRegistryPaginationConfiguration,
  ListAttributeGroupsCommandInput,
  ListAttributeGroupsCommandOutput
>(ServiceCatalogAppRegistryClient, ListAttributeGroupsCommand, "nextToken", "nextToken", "maxResults");
