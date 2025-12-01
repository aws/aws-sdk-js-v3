// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationOperationsCommand,
  ListApplicationOperationsCommandInput,
  ListApplicationOperationsCommandOutput,
} from "../commands/ListApplicationOperationsCommand";
import { KinesisAnalyticsV2Client } from "../KinesisAnalyticsV2Client";
import { KinesisAnalyticsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationOperations: (
  config: KinesisAnalyticsV2PaginationConfiguration,
  input: ListApplicationOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationOperationsCommandOutput> = createPaginator<
  KinesisAnalyticsV2PaginationConfiguration,
  ListApplicationOperationsCommandInput,
  ListApplicationOperationsCommandOutput
>(KinesisAnalyticsV2Client, ListApplicationOperationsCommand, "NextToken", "NextToken", "Limit");
