// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNotificationChannelsCommand,
  ListNotificationChannelsCommandInput,
  ListNotificationChannelsCommandOutput,
} from "../commands/ListNotificationChannelsCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotificationChannels: (
  config: DevOpsGuruPaginationConfiguration,
  input: ListNotificationChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListNotificationChannelsCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  ListNotificationChannelsCommandInput,
  ListNotificationChannelsCommandOutput
>(DevOpsGuruClient, ListNotificationChannelsCommand, "NextToken", "NextToken", "");
