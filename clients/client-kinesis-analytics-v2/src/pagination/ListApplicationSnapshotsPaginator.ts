// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListApplicationSnapshotsCommand,
  ListApplicationSnapshotsCommandInput,
  ListApplicationSnapshotsCommandOutput,
} from "../commands/ListApplicationSnapshotsCommand";
import { KinesisAnalyticsV2Client } from "../KinesisAnalyticsV2Client";
import { KinesisAnalyticsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationSnapshots: (
  config: KinesisAnalyticsV2PaginationConfiguration,
  input: ListApplicationSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationSnapshotsCommandOutput> = createPaginator<
  KinesisAnalyticsV2PaginationConfiguration,
  ListApplicationSnapshotsCommandInput,
  ListApplicationSnapshotsCommandOutput
>(KinesisAnalyticsV2Client, ListApplicationSnapshotsCommand, "NextToken", "NextToken", "Limit");
