// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListNotificationHubsCommand,
  ListNotificationHubsCommandInput,
  ListNotificationHubsCommandOutput,
} from "../commands/ListNotificationHubsCommand";
import { NotificationsClient } from "../NotificationsClient";
import { NotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotificationHubs: (
  config: NotificationsPaginationConfiguration,
  input: ListNotificationHubsCommandInput,
  ...rest: any[]
) => Paginator<ListNotificationHubsCommandOutput> = createPaginator<
  NotificationsPaginationConfiguration,
  ListNotificationHubsCommandInput,
  ListNotificationHubsCommandOutput
>(NotificationsClient, ListNotificationHubsCommand, "nextToken", "nextToken", "maxResults");
