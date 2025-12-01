// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListRecoveryPointsByResourceCommand,
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
} from "../commands/ListRecoveryPointsByResourceCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecoveryPointsByResource: (
  config: BackupPaginationConfiguration,
  input: ListRecoveryPointsByResourceCommandInput,
  ...rest: any[]
) => Paginator<ListRecoveryPointsByResourceCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput
>(BackupClient, ListRecoveryPointsByResourceCommand, "NextToken", "NextToken", "MaxResults");
