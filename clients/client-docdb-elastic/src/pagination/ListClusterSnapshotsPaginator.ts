// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClusterSnapshotsCommand,
  ListClusterSnapshotsCommandInput,
  ListClusterSnapshotsCommandOutput,
} from "../commands/ListClusterSnapshotsCommand";
import { DocDBElasticClient } from "../DocDBElasticClient";
import type { DocDBElasticPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusterSnapshots: (
  config: DocDBElasticPaginationConfiguration,
  input: ListClusterSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<ListClusterSnapshotsCommandOutput> = createPaginator<
  DocDBElasticPaginationConfiguration,
  ListClusterSnapshotsCommandInput,
  ListClusterSnapshotsCommandOutput
>(DocDBElasticClient, ListClusterSnapshotsCommand, "nextToken", "nextToken", "maxResults");
