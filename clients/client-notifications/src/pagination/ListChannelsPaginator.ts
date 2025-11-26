// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "../commands/ListChannelsCommand";
import { NotificationsClient } from "../NotificationsClient";
import { NotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannels: (
  config: NotificationsPaginationConfiguration,
  input: ListChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelsCommandOutput> = createPaginator<
  NotificationsPaginationConfiguration,
  ListChannelsCommandInput,
  ListChannelsCommandOutput
>(NotificationsClient, ListChannelsCommand, "nextToken", "nextToken", "maxResults");
