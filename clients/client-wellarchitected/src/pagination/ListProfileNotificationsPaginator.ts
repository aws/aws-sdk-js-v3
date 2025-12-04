// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProfileNotificationsCommand,
  ListProfileNotificationsCommandInput,
  ListProfileNotificationsCommandOutput,
} from "../commands/ListProfileNotificationsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProfileNotifications: (
  config: WellArchitectedPaginationConfiguration,
  input: ListProfileNotificationsCommandInput,
  ...rest: any[]
) => Paginator<ListProfileNotificationsCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListProfileNotificationsCommandInput,
  ListProfileNotificationsCommandOutput
>(WellArchitectedClient, ListProfileNotificationsCommand, "NextToken", "NextToken", "MaxResults");
