// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListDirectoriesCommand,
  ListDirectoriesCommandInput,
  ListDirectoriesCommandOutput,
} from "../commands/ListDirectoriesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDirectories: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListDirectoriesCommandInput,
  ...rest: any[]
) => Paginator<ListDirectoriesCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListDirectoriesCommandInput,
  ListDirectoriesCommandOutput
>(CloudDirectoryClient, ListDirectoriesCommand, "NextToken", "NextToken", "MaxResults");
