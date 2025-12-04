// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSnapshotsInRecycleBinCommand,
  ListSnapshotsInRecycleBinCommandInput,
  ListSnapshotsInRecycleBinCommandOutput,
} from "../commands/ListSnapshotsInRecycleBinCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSnapshotsInRecycleBin: (
  config: EC2PaginationConfiguration,
  input: ListSnapshotsInRecycleBinCommandInput,
  ...rest: any[]
) => Paginator<ListSnapshotsInRecycleBinCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  ListSnapshotsInRecycleBinCommandInput,
  ListSnapshotsInRecycleBinCommandOutput
>(EC2Client, ListSnapshotsInRecycleBinCommand, "NextToken", "NextToken", "MaxResults");
