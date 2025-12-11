// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSnapshotsCommand,
  ListSnapshotsCommandInput,
  ListSnapshotsCommandOutput,
} from "../commands/ListSnapshotsCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSnapshots: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<ListSnapshotsCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListSnapshotsCommandInput,
  ListSnapshotsCommandOutput
>(RedshiftServerlessClient, ListSnapshotsCommand, "nextToken", "nextToken", "maxResults");
