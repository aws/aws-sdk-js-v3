// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodestarNotificationsClient } from "../CodestarNotificationsClient";
import {
  ListNotificationRulesCommand,
  ListNotificationRulesCommandInput,
  ListNotificationRulesCommandOutput,
} from "../commands/ListNotificationRulesCommand";
import { CodestarNotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotificationRules: (
  config: CodestarNotificationsPaginationConfiguration,
  input: ListNotificationRulesCommandInput,
  ...rest: any[]
) => Paginator<ListNotificationRulesCommandOutput> = createPaginator<
  CodestarNotificationsPaginationConfiguration,
  ListNotificationRulesCommandInput,
  ListNotificationRulesCommandOutput
>(CodestarNotificationsClient, ListNotificationRulesCommand, "NextToken", "NextToken", "MaxResults");
