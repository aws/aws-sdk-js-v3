// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetResourcesCommand,
  GetResourcesCommandInput,
  GetResourcesCommandOutput,
} from "../commands/GetResourcesCommand";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResources: (
  config: ResourceGroupsTaggingAPIPaginationConfiguration,
  input: GetResourcesCommandInput,
  ...rest: any[]
) => Paginator<GetResourcesCommandOutput> = createPaginator<
  ResourceGroupsTaggingAPIPaginationConfiguration,
  GetResourcesCommandInput,
  GetResourcesCommandOutput
>(ResourceGroupsTaggingAPIClient, GetResourcesCommand, "PaginationToken", "PaginationToken", "ResourcesPerPage");
