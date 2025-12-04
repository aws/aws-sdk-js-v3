// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodestarNotificationsClient } from "../CodestarNotificationsClient";
import {
  ListEventTypesCommand,
  ListEventTypesCommandInput,
  ListEventTypesCommandOutput,
} from "../commands/ListEventTypesCommand";
import { CodestarNotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventTypes: (
  config: CodestarNotificationsPaginationConfiguration,
  input: ListEventTypesCommandInput,
  ...rest: any[]
) => Paginator<ListEventTypesCommandOutput> = createPaginator<
  CodestarNotificationsPaginationConfiguration,
  ListEventTypesCommandInput,
  ListEventTypesCommandOutput
>(CodestarNotificationsClient, ListEventTypesCommand, "NextToken", "NextToken", "MaxResults");
