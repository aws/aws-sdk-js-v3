// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServicePipelineProvisionedResourcesCommand,
  ListServicePipelineProvisionedResourcesCommandInput,
  ListServicePipelineProvisionedResourcesCommandOutput,
} from "../commands/ListServicePipelineProvisionedResourcesCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServicePipelineProvisionedResources: (
  config: ProtonPaginationConfiguration,
  input: ListServicePipelineProvisionedResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListServicePipelineProvisionedResourcesCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListServicePipelineProvisionedResourcesCommandInput,
  ListServicePipelineProvisionedResourcesCommandOutput
>(ProtonClient, ListServicePipelineProvisionedResourcesCommand, "nextToken", "nextToken", "");
