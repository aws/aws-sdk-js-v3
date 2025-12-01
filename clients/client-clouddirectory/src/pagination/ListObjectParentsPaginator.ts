// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListObjectParentsCommand,
  ListObjectParentsCommandInput,
  ListObjectParentsCommandOutput,
} from "../commands/ListObjectParentsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListObjectParents: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectParentsCommandInput,
  ...rest: any[]
) => Paginator<ListObjectParentsCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListObjectParentsCommandInput,
  ListObjectParentsCommandOutput
>(CloudDirectoryClient, ListObjectParentsCommand, "NextToken", "NextToken", "MaxResults");
