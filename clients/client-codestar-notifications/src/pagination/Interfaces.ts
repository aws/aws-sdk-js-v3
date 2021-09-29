import { CodestarNotifications } from "../CodestarNotifications";
import { CodestarNotificationsClient } from "../CodestarNotificationsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CodestarNotificationsPaginationConfiguration extends PaginationConfiguration {
  client: CodestarNotifications | CodestarNotificationsClient;
}
