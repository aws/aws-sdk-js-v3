// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListNotificationEventsCommand,
  ListNotificationEventsCommandInput,
  ListNotificationEventsCommandOutput,
} from "../commands/ListNotificationEventsCommand";
import { NotificationsClient } from "../NotificationsClient";
import { NotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotificationEvents: (
  config: NotificationsPaginationConfiguration,
  input: ListNotificationEventsCommandInput,
  ...rest: any[]
) => Paginator<ListNotificationEventsCommandOutput> = createPaginator<
  NotificationsPaginationConfiguration,
  ListNotificationEventsCommandInput,
  ListNotificationEventsCommandOutput
>(NotificationsClient, ListNotificationEventsCommand, "nextToken", "nextToken", "maxResults");
