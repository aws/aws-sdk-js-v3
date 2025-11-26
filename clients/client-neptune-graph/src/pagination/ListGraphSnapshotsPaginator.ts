// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGraphSnapshotsCommand,
  ListGraphSnapshotsCommandInput,
  ListGraphSnapshotsCommandOutput,
} from "../commands/ListGraphSnapshotsCommand";
import { NeptuneGraphClient } from "../NeptuneGraphClient";
import { NeptuneGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGraphSnapshots: (
  config: NeptuneGraphPaginationConfiguration,
  input: ListGraphSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<ListGraphSnapshotsCommandOutput> = createPaginator<
  NeptuneGraphPaginationConfiguration,
  ListGraphSnapshotsCommandInput,
  ListGraphSnapshotsCommandOutput
>(NeptuneGraphClient, ListGraphSnapshotsCommand, "nextToken", "nextToken", "maxResults");
