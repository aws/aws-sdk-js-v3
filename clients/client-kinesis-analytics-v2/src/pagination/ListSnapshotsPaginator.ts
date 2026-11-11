// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSnapshotsCommand,
  ListSnapshotsCommandInput,
  ListSnapshotsCommandOutput,
} from "../commands/ListSnapshotsCommand";
import { KinesisAnalyticsV2Client } from "../KinesisAnalyticsV2Client";
import type { KinesisAnalyticsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSnapshots: (
  config: KinesisAnalyticsV2PaginationConfiguration,
  input: ListSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<ListSnapshotsCommandOutput> = createPaginator<
  KinesisAnalyticsV2PaginationConfiguration,
  ListSnapshotsCommandInput,
  ListSnapshotsCommandOutput
>(KinesisAnalyticsV2Client, ListSnapshotsCommand, "NextToken", "NextToken", "Limit");
