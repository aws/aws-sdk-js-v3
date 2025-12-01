// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentProvisionedResourcesCommand,
  ListEnvironmentProvisionedResourcesCommandInput,
  ListEnvironmentProvisionedResourcesCommandOutput,
} from "../commands/ListEnvironmentProvisionedResourcesCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironmentProvisionedResources: (
  config: ProtonPaginationConfiguration,
  input: ListEnvironmentProvisionedResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentProvisionedResourcesCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListEnvironmentProvisionedResourcesCommandInput,
  ListEnvironmentProvisionedResourcesCommandOutput
>(ProtonClient, ListEnvironmentProvisionedResourcesCommand, "nextToken", "nextToken", "");
