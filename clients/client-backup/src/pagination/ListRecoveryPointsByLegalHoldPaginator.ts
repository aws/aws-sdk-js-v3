// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListRecoveryPointsByLegalHoldCommand,
  ListRecoveryPointsByLegalHoldCommandInput,
  ListRecoveryPointsByLegalHoldCommandOutput,
} from "../commands/ListRecoveryPointsByLegalHoldCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecoveryPointsByLegalHold: (
  config: BackupPaginationConfiguration,
  input: ListRecoveryPointsByLegalHoldCommandInput,
  ...rest: any[]
) => Paginator<ListRecoveryPointsByLegalHoldCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListRecoveryPointsByLegalHoldCommandInput,
  ListRecoveryPointsByLegalHoldCommandOutput
>(BackupClient, ListRecoveryPointsByLegalHoldCommand, "NextToken", "NextToken", "MaxResults");
