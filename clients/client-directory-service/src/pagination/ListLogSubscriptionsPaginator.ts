// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLogSubscriptionsCommand,
  ListLogSubscriptionsCommandInput,
  ListLogSubscriptionsCommandOutput,
} from "../commands/ListLogSubscriptionsCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLogSubscriptions: (
  config: DirectoryServicePaginationConfiguration,
  input: ListLogSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<ListLogSubscriptionsCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  ListLogSubscriptionsCommandInput,
  ListLogSubscriptionsCommandOutput
>(DirectoryServiceClient, ListLogSubscriptionsCommand, "NextToken", "NextToken", "Limit");
