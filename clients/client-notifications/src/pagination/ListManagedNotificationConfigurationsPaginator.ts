// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListManagedNotificationConfigurationsCommand,
  ListManagedNotificationConfigurationsCommandInput,
  ListManagedNotificationConfigurationsCommandOutput,
} from "../commands/ListManagedNotificationConfigurationsCommand";
import { NotificationsClient } from "../NotificationsClient";
import { NotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedNotificationConfigurations: (
  config: NotificationsPaginationConfiguration,
  input: ListManagedNotificationConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedNotificationConfigurationsCommandOutput> = createPaginator<
  NotificationsPaginationConfiguration,
  ListManagedNotificationConfigurationsCommandInput,
  ListManagedNotificationConfigurationsCommandOutput
>(NotificationsClient, ListManagedNotificationConfigurationsCommand, "nextToken", "nextToken", "maxResults");
