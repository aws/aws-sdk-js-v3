// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSupportedResourceTypesCommand,
  ListSupportedResourceTypesCommandInput,
  ListSupportedResourceTypesCommandOutput,
} from "../commands/ListSupportedResourceTypesCommand";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSupportedResourceTypes: (
  config: ResourceExplorer2PaginationConfiguration,
  input: ListSupportedResourceTypesCommandInput,
  ...rest: any[]
) => Paginator<ListSupportedResourceTypesCommandOutput> = createPaginator<
  ResourceExplorer2PaginationConfiguration,
  ListSupportedResourceTypesCommandInput,
  ListSupportedResourceTypesCommandOutput
>(ResourceExplorer2Client, ListSupportedResourceTypesCommand, "NextToken", "NextToken", "MaxResults");
