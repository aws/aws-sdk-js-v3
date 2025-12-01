// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKxClusterNodesCommand,
  ListKxClusterNodesCommandInput,
  ListKxClusterNodesCommandOutput,
} from "../commands/ListKxClusterNodesCommand";
import { FinspaceClient } from "../FinspaceClient";
import { FinspacePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKxClusterNodes: (
  config: FinspacePaginationConfiguration,
  input: ListKxClusterNodesCommandInput,
  ...rest: any[]
) => Paginator<ListKxClusterNodesCommandOutput> = createPaginator<
  FinspacePaginationConfiguration,
  ListKxClusterNodesCommandInput,
  ListKxClusterNodesCommandOutput
>(FinspaceClient, ListKxClusterNodesCommand, "nextToken", "nextToken", "maxResults");
