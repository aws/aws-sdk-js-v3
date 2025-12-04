// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListObjectParentPathsCommand,
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
} from "../commands/ListObjectParentPathsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListObjectParentPaths: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectParentPathsCommandInput,
  ...rest: any[]
) => Paginator<ListObjectParentPathsCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput
>(CloudDirectoryClient, ListObjectParentPathsCommand, "NextToken", "NextToken", "MaxResults");
