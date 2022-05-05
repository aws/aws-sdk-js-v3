// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CodestarNotifications } from "../CodestarNotifications";
import { CodestarNotificationsClient } from "../CodestarNotificationsClient";

export interface CodestarNotificationsPaginationConfiguration extends PaginationConfiguration {
  client: CodestarNotifications | CodestarNotificationsClient;
}
