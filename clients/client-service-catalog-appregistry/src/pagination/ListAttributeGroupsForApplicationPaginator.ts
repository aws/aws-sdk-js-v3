// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAttributeGroupsForApplicationCommand,
  ListAttributeGroupsForApplicationCommandInput,
  ListAttributeGroupsForApplicationCommandOutput,
} from "../commands/ListAttributeGroupsForApplicationCommand";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttributeGroupsForApplication: (
  config: ServiceCatalogAppRegistryPaginationConfiguration,
  input: ListAttributeGroupsForApplicationCommandInput,
  ...rest: any[]
) => Paginator<ListAttributeGroupsForApplicationCommandOutput> = createPaginator<
  ServiceCatalogAppRegistryPaginationConfiguration,
  ListAttributeGroupsForApplicationCommandInput,
  ListAttributeGroupsForApplicationCommandOutput
>(ServiceCatalogAppRegistryClient, ListAttributeGroupsForApplicationCommand, "nextToken", "nextToken", "maxResults");
