// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeConnectionsClient } from "../CodeConnectionsClient";
import { ListHostsCommand, ListHostsCommandInput, ListHostsCommandOutput } from "../commands/ListHostsCommand";
import { CodeConnectionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHosts: (
  config: CodeConnectionsPaginationConfiguration,
  input: ListHostsCommandInput,
  ...rest: any[]
) => Paginator<ListHostsCommandOutput> = createPaginator<
  CodeConnectionsPaginationConfiguration,
  ListHostsCommandInput,
  ListHostsCommandOutput
>(CodeConnectionsClient, ListHostsCommand, "NextToken", "NextToken", "MaxResults");
