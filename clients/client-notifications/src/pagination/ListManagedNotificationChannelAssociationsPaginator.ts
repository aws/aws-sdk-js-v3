// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListManagedNotificationChannelAssociationsCommand,
  ListManagedNotificationChannelAssociationsCommandInput,
  ListManagedNotificationChannelAssociationsCommandOutput,
} from "../commands/ListManagedNotificationChannelAssociationsCommand";
import { NotificationsClient } from "../NotificationsClient";
import { NotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedNotificationChannelAssociations: (
  config: NotificationsPaginationConfiguration,
  input: ListManagedNotificationChannelAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedNotificationChannelAssociationsCommandOutput> = createPaginator<
  NotificationsPaginationConfiguration,
  ListManagedNotificationChannelAssociationsCommandInput,
  ListManagedNotificationChannelAssociationsCommandOutput
>(NotificationsClient, ListManagedNotificationChannelAssociationsCommand, "nextToken", "nextToken", "maxResults");
