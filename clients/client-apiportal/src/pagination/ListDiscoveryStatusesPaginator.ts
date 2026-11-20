// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIPortalClient } from "../APIPortalClient";
import {
  ListDiscoveryStatusesCommand,
  ListDiscoveryStatusesCommandInput,
  ListDiscoveryStatusesCommandOutput,
} from "../commands/ListDiscoveryStatusesCommand";
import type { APIPortalPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDiscoveryStatuses: (
  config: APIPortalPaginationConfiguration,
  input: ListDiscoveryStatusesCommandInput,
  ...rest: any[]
) => Paginator<ListDiscoveryStatusesCommandOutput> = createPaginator<
  APIPortalPaginationConfiguration,
  ListDiscoveryStatusesCommandInput,
  ListDiscoveryStatusesCommandOutput
>(APIPortalClient, ListDiscoveryStatusesCommand, "nextToken", "nextToken", "maxResults");
