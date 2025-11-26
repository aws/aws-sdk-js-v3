// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubscriptionRequestsCommand,
  ListSubscriptionRequestsCommandInput,
  ListSubscriptionRequestsCommandOutput,
} from "../commands/ListSubscriptionRequestsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubscriptionRequests: (
  config: DataZonePaginationConfiguration,
  input: ListSubscriptionRequestsCommandInput,
  ...rest: any[]
) => Paginator<ListSubscriptionRequestsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListSubscriptionRequestsCommandInput,
  ListSubscriptionRequestsCommandOutput
>(DataZoneClient, ListSubscriptionRequestsCommand, "nextToken", "nextToken", "maxResults");
