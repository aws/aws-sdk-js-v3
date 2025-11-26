// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeStarConnectionsClient } from "../CodeStarConnectionsClient";
import { ListHostsCommand, ListHostsCommandInput, ListHostsCommandOutput } from "../commands/ListHostsCommand";
import { CodeStarConnectionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHosts: (
  config: CodeStarConnectionsPaginationConfiguration,
  input: ListHostsCommandInput,
  ...rest: any[]
) => Paginator<ListHostsCommandOutput> = createPaginator<
  CodeStarConnectionsPaginationConfiguration,
  ListHostsCommandInput,
  ListHostsCommandOutput
>(CodeStarConnectionsClient, ListHostsCommand, "NextToken", "NextToken", "MaxResults");
