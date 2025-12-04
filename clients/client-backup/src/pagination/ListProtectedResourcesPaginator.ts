// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListProtectedResourcesCommand,
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
} from "../commands/ListProtectedResourcesCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProtectedResources: (
  config: BackupPaginationConfiguration,
  input: ListProtectedResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListProtectedResourcesCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput
>(BackupClient, ListProtectedResourcesCommand, "NextToken", "NextToken", "MaxResults");
