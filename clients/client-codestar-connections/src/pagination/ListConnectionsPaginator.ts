// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeStarConnectionsClient } from "../CodeStarConnectionsClient";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "../commands/ListConnectionsCommand";
import { CodeStarConnectionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnections: (
  config: CodeStarConnectionsPaginationConfiguration,
  input: ListConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectionsCommandOutput> = createPaginator<
  CodeStarConnectionsPaginationConfiguration,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput
>(CodeStarConnectionsClient, ListConnectionsCommand, "NextToken", "NextToken", "MaxResults");
