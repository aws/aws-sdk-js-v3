// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubscriptionGrantsCommand,
  ListSubscriptionGrantsCommandInput,
  ListSubscriptionGrantsCommandOutput,
} from "../commands/ListSubscriptionGrantsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubscriptionGrants: (
  config: DataZonePaginationConfiguration,
  input: ListSubscriptionGrantsCommandInput,
  ...rest: any[]
) => Paginator<ListSubscriptionGrantsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListSubscriptionGrantsCommandInput,
  ListSubscriptionGrantsCommandOutput
>(DataZoneClient, ListSubscriptionGrantsCommand, "nextToken", "nextToken", "maxResults");
