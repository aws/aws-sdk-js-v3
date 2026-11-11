// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSnapshotOperationsCommand,
  ListSnapshotOperationsCommandInput,
  ListSnapshotOperationsCommandOutput,
} from "../commands/ListSnapshotOperationsCommand";
import { KinesisAnalyticsV2Client } from "../KinesisAnalyticsV2Client";
import type { KinesisAnalyticsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSnapshotOperations: (
  config: KinesisAnalyticsV2PaginationConfiguration,
  input: ListSnapshotOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListSnapshotOperationsCommandOutput> = createPaginator<
  KinesisAnalyticsV2PaginationConfiguration,
  ListSnapshotOperationsCommandInput,
  ListSnapshotOperationsCommandOutput
>(KinesisAnalyticsV2Client, ListSnapshotOperationsCommand, "NextToken", "NextToken", "Limit");
