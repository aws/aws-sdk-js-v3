// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import { ListIndexCommand, ListIndexCommandInput, ListIndexCommandOutput } from "../commands/ListIndexCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIndex: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListIndexCommandInput,
  ...rest: any[]
) => Paginator<ListIndexCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListIndexCommandInput,
  ListIndexCommandOutput
>(CloudDirectoryClient, ListIndexCommand, "NextToken", "NextToken", "MaxResults");
