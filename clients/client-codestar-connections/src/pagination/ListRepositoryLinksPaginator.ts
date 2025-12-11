// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeStarConnectionsClient } from "../CodeStarConnectionsClient";
import {
  ListRepositoryLinksCommand,
  ListRepositoryLinksCommandInput,
  ListRepositoryLinksCommandOutput,
} from "../commands/ListRepositoryLinksCommand";
import { CodeStarConnectionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRepositoryLinks: (
  config: CodeStarConnectionsPaginationConfiguration,
  input: ListRepositoryLinksCommandInput,
  ...rest: any[]
) => Paginator<ListRepositoryLinksCommandOutput> = createPaginator<
  CodeStarConnectionsPaginationConfiguration,
  ListRepositoryLinksCommandInput,
  ListRepositoryLinksCommandOutput
>(CodeStarConnectionsClient, ListRepositoryLinksCommand, "NextToken", "NextToken", "MaxResults");
