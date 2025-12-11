// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeConnectionsClient } from "../CodeConnectionsClient";
import {
  ListRepositoryLinksCommand,
  ListRepositoryLinksCommandInput,
  ListRepositoryLinksCommandOutput,
} from "../commands/ListRepositoryLinksCommand";
import { CodeConnectionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRepositoryLinks: (
  config: CodeConnectionsPaginationConfiguration,
  input: ListRepositoryLinksCommandInput,
  ...rest: any[]
) => Paginator<ListRepositoryLinksCommandOutput> = createPaginator<
  CodeConnectionsPaginationConfiguration,
  ListRepositoryLinksCommandInput,
  ListRepositoryLinksCommandOutput
>(CodeConnectionsClient, ListRepositoryLinksCommand, "NextToken", "NextToken", "MaxResults");
