// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListAttachedIndicesCommand,
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput,
} from "../commands/ListAttachedIndicesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttachedIndices: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListAttachedIndicesCommandInput,
  ...rest: any[]
) => Paginator<ListAttachedIndicesCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput
>(CloudDirectoryClient, ListAttachedIndicesCommand, "NextToken", "NextToken", "MaxResults");
