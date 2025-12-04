// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssociatedAttributeGroupsCommand,
  ListAssociatedAttributeGroupsCommandInput,
  ListAssociatedAttributeGroupsCommandOutput,
} from "../commands/ListAssociatedAttributeGroupsCommand";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociatedAttributeGroups: (
  config: ServiceCatalogAppRegistryPaginationConfiguration,
  input: ListAssociatedAttributeGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListAssociatedAttributeGroupsCommandOutput> = createPaginator<
  ServiceCatalogAppRegistryPaginationConfiguration,
  ListAssociatedAttributeGroupsCommandInput,
  ListAssociatedAttributeGroupsCommandOutput
>(ServiceCatalogAppRegistryClient, ListAssociatedAttributeGroupsCommand, "nextToken", "nextToken", "maxResults");
