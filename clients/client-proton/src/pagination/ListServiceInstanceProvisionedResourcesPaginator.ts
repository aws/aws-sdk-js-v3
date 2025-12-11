// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceInstanceProvisionedResourcesCommand,
  ListServiceInstanceProvisionedResourcesCommandInput,
  ListServiceInstanceProvisionedResourcesCommandOutput,
} from "../commands/ListServiceInstanceProvisionedResourcesCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceInstanceProvisionedResources: (
  config: ProtonPaginationConfiguration,
  input: ListServiceInstanceProvisionedResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListServiceInstanceProvisionedResourcesCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListServiceInstanceProvisionedResourcesCommandInput,
  ListServiceInstanceProvisionedResourcesCommandOutput
>(ProtonClient, ListServiceInstanceProvisionedResourcesCommand, "nextToken", "nextToken", "");
