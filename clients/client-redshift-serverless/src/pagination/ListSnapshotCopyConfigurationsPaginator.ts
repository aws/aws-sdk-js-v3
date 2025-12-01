// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSnapshotCopyConfigurationsCommand,
  ListSnapshotCopyConfigurationsCommandInput,
  ListSnapshotCopyConfigurationsCommandOutput,
} from "../commands/ListSnapshotCopyConfigurationsCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSnapshotCopyConfigurations: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListSnapshotCopyConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListSnapshotCopyConfigurationsCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListSnapshotCopyConfigurationsCommandInput,
  ListSnapshotCopyConfigurationsCommandOutput
>(RedshiftServerlessClient, ListSnapshotCopyConfigurationsCommand, "nextToken", "nextToken", "maxResults");
