// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceSynchronizationStatusesCommand,
  ListResourceSynchronizationStatusesCommandInput,
  ListResourceSynchronizationStatusesCommandOutput,
} from "../commands/ListResourceSynchronizationStatusesCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceSynchronizationStatuses: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListResourceSynchronizationStatusesCommandInput,
  ...rest: any[]
) => Paginator<ListResourceSynchronizationStatusesCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListResourceSynchronizationStatusesCommandInput,
  ListResourceSynchronizationStatusesCommandOutput
>(NetworkSecurityManagerClient, ListResourceSynchronizationStatusesCommand, "nextToken", "nextToken", "maxResults");
