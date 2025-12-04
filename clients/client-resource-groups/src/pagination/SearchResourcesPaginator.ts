// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchResourcesCommand,
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput,
} from "../commands/SearchResourcesCommand";
import { ResourceGroupsClient } from "../ResourceGroupsClient";
import { ResourceGroupsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchResources: (
  config: ResourceGroupsPaginationConfiguration,
  input: SearchResourcesCommandInput,
  ...rest: any[]
) => Paginator<SearchResourcesCommandOutput> = createPaginator<
  ResourceGroupsPaginationConfiguration,
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput
>(ResourceGroupsClient, SearchResourcesCommand, "NextToken", "NextToken", "MaxResults");
