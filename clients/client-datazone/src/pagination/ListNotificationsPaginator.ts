// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNotificationsCommand,
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
} from "../commands/ListNotificationsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotifications: (
  config: DataZonePaginationConfiguration,
  input: ListNotificationsCommandInput,
  ...rest: any[]
) => Paginator<ListNotificationsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput
>(DataZoneClient, ListNotificationsCommand, "nextToken", "nextToken", "maxResults");
