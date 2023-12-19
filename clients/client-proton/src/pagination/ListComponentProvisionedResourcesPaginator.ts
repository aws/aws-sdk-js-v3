// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListComponentProvisionedResourcesCommand,
  ListComponentProvisionedResourcesCommandInput,
  ListComponentProvisionedResourcesCommandOutput,
} from "../commands/ListComponentProvisionedResourcesCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComponentProvisionedResources: (
  config: ProtonPaginationConfiguration,
  input: ListComponentProvisionedResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListComponentProvisionedResourcesCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListComponentProvisionedResourcesCommandInput,
  ListComponentProvisionedResourcesCommandOutput
>(ProtonClient, ListComponentProvisionedResourcesCommand, "nextToken", "nextToken", "");
