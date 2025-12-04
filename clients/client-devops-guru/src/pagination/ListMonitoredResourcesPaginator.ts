// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMonitoredResourcesCommand,
  ListMonitoredResourcesCommandInput,
  ListMonitoredResourcesCommandOutput,
} from "../commands/ListMonitoredResourcesCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMonitoredResources: (
  config: DevOpsGuruPaginationConfiguration,
  input: ListMonitoredResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListMonitoredResourcesCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  ListMonitoredResourcesCommandInput,
  ListMonitoredResourcesCommandOutput
>(DevOpsGuruClient, ListMonitoredResourcesCommand, "NextToken", "NextToken", "MaxResults");
