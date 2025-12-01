// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListIndexedRecoveryPointsCommand,
  ListIndexedRecoveryPointsCommandInput,
  ListIndexedRecoveryPointsCommandOutput,
} from "../commands/ListIndexedRecoveryPointsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIndexedRecoveryPoints: (
  config: BackupPaginationConfiguration,
  input: ListIndexedRecoveryPointsCommandInput,
  ...rest: any[]
) => Paginator<ListIndexedRecoveryPointsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListIndexedRecoveryPointsCommandInput,
  ListIndexedRecoveryPointsCommandOutput
>(BackupClient, ListIndexedRecoveryPointsCommand, "NextToken", "NextToken", "MaxResults");
