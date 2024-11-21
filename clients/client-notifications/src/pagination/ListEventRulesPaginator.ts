// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListEventRulesCommand,
  ListEventRulesCommandInput,
  ListEventRulesCommandOutput,
} from "../commands/ListEventRulesCommand";
import { NotificationsClient } from "../NotificationsClient";
import { NotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventRules: (
  config: NotificationsPaginationConfiguration,
  input: ListEventRulesCommandInput,
  ...rest: any[]
) => Paginator<ListEventRulesCommandOutput> = createPaginator<
  NotificationsPaginationConfiguration,
  ListEventRulesCommandInput,
  ListEventRulesCommandOutput
>(NotificationsClient, ListEventRulesCommand, "nextToken", "nextToken", "maxResults");
