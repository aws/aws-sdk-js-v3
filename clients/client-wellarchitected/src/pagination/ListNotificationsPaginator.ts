// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNotificationsCommand,
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
} from "../commands/ListNotificationsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotifications: (
  config: WellArchitectedPaginationConfiguration,
  input: ListNotificationsCommandInput,
  ...rest: any[]
) => Paginator<ListNotificationsCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput
>(WellArchitectedClient, ListNotificationsCommand, "NextToken", "NextToken", "MaxResults");
