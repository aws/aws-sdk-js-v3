// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubscriptionTargetsCommand,
  ListSubscriptionTargetsCommandInput,
  ListSubscriptionTargetsCommandOutput,
} from "../commands/ListSubscriptionTargetsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubscriptionTargets: (
  config: DataZonePaginationConfiguration,
  input: ListSubscriptionTargetsCommandInput,
  ...rest: any[]
) => Paginator<ListSubscriptionTargetsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListSubscriptionTargetsCommandInput,
  ListSubscriptionTargetsCommandOutput
>(DataZoneClient, ListSubscriptionTargetsCommand, "nextToken", "nextToken", "maxResults");
