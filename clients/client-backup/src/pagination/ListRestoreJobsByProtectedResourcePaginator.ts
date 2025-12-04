// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListRestoreJobsByProtectedResourceCommand,
  ListRestoreJobsByProtectedResourceCommandInput,
  ListRestoreJobsByProtectedResourceCommandOutput,
} from "../commands/ListRestoreJobsByProtectedResourceCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRestoreJobsByProtectedResource: (
  config: BackupPaginationConfiguration,
  input: ListRestoreJobsByProtectedResourceCommandInput,
  ...rest: any[]
) => Paginator<ListRestoreJobsByProtectedResourceCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListRestoreJobsByProtectedResourceCommandInput,
  ListRestoreJobsByProtectedResourceCommandOutput
>(BackupClient, ListRestoreJobsByProtectedResourceCommand, "NextToken", "NextToken", "MaxResults");
