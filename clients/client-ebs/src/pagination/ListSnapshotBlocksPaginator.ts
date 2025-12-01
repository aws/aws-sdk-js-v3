// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSnapshotBlocksCommand,
  ListSnapshotBlocksCommandInput,
  ListSnapshotBlocksCommandOutput,
} from "../commands/ListSnapshotBlocksCommand";
import { EBSClient } from "../EBSClient";
import { EBSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSnapshotBlocks: (
  config: EBSPaginationConfiguration,
  input: ListSnapshotBlocksCommandInput,
  ...rest: any[]
) => Paginator<ListSnapshotBlocksCommandOutput> = createPaginator<
  EBSPaginationConfiguration,
  ListSnapshotBlocksCommandInput,
  ListSnapshotBlocksCommandOutput
>(EBSClient, ListSnapshotBlocksCommand, "NextToken", "NextToken", "MaxResults");
