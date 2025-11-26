// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodestarNotificationsClient } from "../CodestarNotificationsClient";
import { ListTargetsCommand, ListTargetsCommandInput, ListTargetsCommandOutput } from "../commands/ListTargetsCommand";
import { CodestarNotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTargets: (
  config: CodestarNotificationsPaginationConfiguration,
  input: ListTargetsCommandInput,
  ...rest: any[]
) => Paginator<ListTargetsCommandOutput> = createPaginator<
  CodestarNotificationsPaginationConfiguration,
  ListTargetsCommandInput,
  ListTargetsCommandOutput
>(CodestarNotificationsClient, ListTargetsCommand, "NextToken", "NextToken", "MaxResults");
