// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListManagedNotificationChildEventsCommand,
  ListManagedNotificationChildEventsCommandInput,
  ListManagedNotificationChildEventsCommandOutput,
} from "../commands/ListManagedNotificationChildEventsCommand";
import { NotificationsClient } from "../NotificationsClient";
import { NotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedNotificationChildEvents: (
  config: NotificationsPaginationConfiguration,
  input: ListManagedNotificationChildEventsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedNotificationChildEventsCommandOutput> = createPaginator<
  NotificationsPaginationConfiguration,
  ListManagedNotificationChildEventsCommandInput,
  ListManagedNotificationChildEventsCommandOutput
>(NotificationsClient, ListManagedNotificationChildEventsCommand, "nextToken", "nextToken", "maxResults");
