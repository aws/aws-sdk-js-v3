// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListNodesCommand, ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNodes: (
  config: SSMPaginationConfiguration,
  input: ListNodesCommandInput,
  ...rest: any[]
) => Paginator<ListNodesCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListNodesCommandInput,
  ListNodesCommandOutput
>(SSMClient, ListNodesCommand, "NextToken", "NextToken", "MaxResults");
