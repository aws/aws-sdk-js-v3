// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubscriptionsCommand,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "../commands/ListSubscriptionsCommand";
import { ConnectHealthClient } from "../ConnectHealthClient";
import type { ConnectHealthPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubscriptions: (
  config: ConnectHealthPaginationConfiguration,
  input: ListSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<ListSubscriptionsCommandOutput> = createPaginator<
  ConnectHealthPaginationConfiguration,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput
>(ConnectHealthClient, ListSubscriptionsCommand, "nextToken", "nextToken", "maxResults");
