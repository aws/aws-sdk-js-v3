// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BackupStorageClient } from "../BackupStorageClient";
import { ListChunksCommand, ListChunksCommandInput, ListChunksCommandOutput } from "../commands/ListChunksCommand";
import { BackupStoragePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChunks: (
  config: BackupStoragePaginationConfiguration,
  input: ListChunksCommandInput,
  ...rest: any[]
) => Paginator<ListChunksCommandOutput> = createPaginator<
  BackupStoragePaginationConfiguration,
  ListChunksCommandInput,
  ListChunksCommandOutput
>(BackupStorageClient, ListChunksCommand, "NextToken", "NextToken", "MaxResults");
