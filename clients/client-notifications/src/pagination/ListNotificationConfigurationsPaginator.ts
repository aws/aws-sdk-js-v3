// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListNotificationConfigurationsCommand,
  ListNotificationConfigurationsCommandInput,
  ListNotificationConfigurationsCommandOutput,
} from "../commands/ListNotificationConfigurationsCommand";
import { NotificationsClient } from "../NotificationsClient";
import { NotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotificationConfigurations: (
  config: NotificationsPaginationConfiguration,
  input: ListNotificationConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListNotificationConfigurationsCommandOutput> = createPaginator<
  NotificationsPaginationConfiguration,
  ListNotificationConfigurationsCommandInput,
  ListNotificationConfigurationsCommandOutput
>(NotificationsClient, ListNotificationConfigurationsCommand, "nextToken", "nextToken", "maxResults");
