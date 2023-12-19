// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BackupStorageClient } from "../BackupStorageClient";
import { ListObjectsCommand, ListObjectsCommandInput, ListObjectsCommandOutput } from "../commands/ListObjectsCommand";
import { BackupStoragePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListObjects: (
  config: BackupStoragePaginationConfiguration,
  input: ListObjectsCommandInput,
  ...rest: any[]
) => Paginator<ListObjectsCommandOutput> = createPaginator<
  BackupStoragePaginationConfiguration,
  ListObjectsCommandInput,
  ListObjectsCommandOutput
>(BackupStorageClient, ListObjectsCommand, "NextToken", "NextToken", "MaxResults");
