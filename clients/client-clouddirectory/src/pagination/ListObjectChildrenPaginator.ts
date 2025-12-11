// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListObjectChildrenCommand,
  ListObjectChildrenCommandInput,
  ListObjectChildrenCommandOutput,
} from "../commands/ListObjectChildrenCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListObjectChildren: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectChildrenCommandInput,
  ...rest: any[]
) => Paginator<ListObjectChildrenCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListObjectChildrenCommandInput,
  ListObjectChildrenCommandOutput
>(CloudDirectoryClient, ListObjectChildrenCommand, "NextToken", "NextToken", "MaxResults");
