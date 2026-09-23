// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAggregateResourceSynchronizationStatusesCommand,
  ListAggregateResourceSynchronizationStatusesCommandInput,
  ListAggregateResourceSynchronizationStatusesCommandOutput,
} from "../commands/ListAggregateResourceSynchronizationStatusesCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAggregateResourceSynchronizationStatuses: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListAggregateResourceSynchronizationStatusesCommandInput,
  ...rest: any[]
) => Paginator<ListAggregateResourceSynchronizationStatusesCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListAggregateResourceSynchronizationStatusesCommandInput,
  ListAggregateResourceSynchronizationStatusesCommandOutput
>(NetworkSecurityManagerClient, ListAggregateResourceSynchronizationStatusesCommand, "nextToken", "nextToken", "maxResults");
