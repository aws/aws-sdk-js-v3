// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListManagedNotificationEventsCommand,
  ListManagedNotificationEventsCommandInput,
  ListManagedNotificationEventsCommandOutput,
} from "../commands/ListManagedNotificationEventsCommand";
import { NotificationsClient } from "../NotificationsClient";
import { NotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedNotificationEvents: (
  config: NotificationsPaginationConfiguration,
  input: ListManagedNotificationEventsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedNotificationEventsCommandOutput> = createPaginator<
  NotificationsPaginationConfiguration,
  ListManagedNotificationEventsCommandInput,
  ListManagedNotificationEventsCommandOutput
>(NotificationsClient, ListManagedNotificationEventsCommand, "nextToken", "nextToken", "maxResults");
