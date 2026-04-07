// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFileSystemsCommand,
  ListFileSystemsCommandInput,
  ListFileSystemsCommandOutput,
} from "../commands/ListFileSystemsCommand";
import { S3FilesClient } from "../S3FilesClient";
import type { S3FilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFileSystems: (
  config: S3FilesPaginationConfiguration,
  input: ListFileSystemsCommandInput,
  ...rest: any[]
) => Paginator<ListFileSystemsCommandOutput> = createPaginator<
  S3FilesPaginationConfiguration,
  ListFileSystemsCommandInput,
  ListFileSystemsCommandOutput
>(S3FilesClient, ListFileSystemsCommand, "nextToken", "nextToken", "maxResults");
