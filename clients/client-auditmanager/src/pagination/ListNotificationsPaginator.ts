// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListNotificationsCommand,
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
} from "../commands/ListNotificationsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotifications: (
  config: AuditManagerPaginationConfiguration,
  input: ListNotificationsCommandInput,
  ...rest: any[]
) => Paginator<ListNotificationsCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput
>(AuditManagerClient, ListNotificationsCommand, "nextToken", "nextToken", "maxResults");
