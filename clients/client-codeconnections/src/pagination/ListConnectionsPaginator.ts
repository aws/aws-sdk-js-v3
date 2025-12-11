// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeConnectionsClient } from "../CodeConnectionsClient";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "../commands/ListConnectionsCommand";
import { CodeConnectionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnections: (
  config: CodeConnectionsPaginationConfiguration,
  input: ListConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectionsCommandOutput> = createPaginator<
  CodeConnectionsPaginationConfiguration,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput
>(CodeConnectionsClient, ListConnectionsCommand, "NextToken", "NextToken", "MaxResults");
