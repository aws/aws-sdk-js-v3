// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListDbNodesCommand, ListDbNodesCommandInput, ListDbNodesCommandOutput } from "../commands/ListDbNodesCommand";
import { OdbClient } from "../OdbClient";
import { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDbNodes: (
  config: OdbPaginationConfiguration,
  input: ListDbNodesCommandInput,
  ...rest: any[]
) => Paginator<ListDbNodesCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListDbNodesCommandInput,
  ListDbNodesCommandOutput
>(OdbClient, ListDbNodesCommand, "nextToken", "nextToken", "maxResults");
