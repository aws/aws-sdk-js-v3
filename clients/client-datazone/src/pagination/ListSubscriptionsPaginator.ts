// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubscriptionsCommand,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "../commands/ListSubscriptionsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubscriptions: (
  config: DataZonePaginationConfiguration,
  input: ListSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<ListSubscriptionsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput
>(DataZoneClient, ListSubscriptionsCommand, "nextToken", "nextToken", "maxResults");
