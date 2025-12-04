// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVersionsCommand,
  ListVersionsCommandInput,
  ListVersionsCommandOutput,
} from "../commands/ListVersionsCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVersions: (
  config: OpenSearchPaginationConfiguration,
  input: ListVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListVersionsCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  ListVersionsCommandInput,
  ListVersionsCommandOutput
>(OpenSearchClient, ListVersionsCommand, "NextToken", "NextToken", "MaxResults");
