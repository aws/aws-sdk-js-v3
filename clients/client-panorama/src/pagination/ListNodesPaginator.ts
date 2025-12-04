// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListNodesCommand, ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNodes: (
  config: PanoramaPaginationConfiguration,
  input: ListNodesCommandInput,
  ...rest: any[]
) => Paginator<ListNodesCommandOutput> = createPaginator<
  PanoramaPaginationConfiguration,
  ListNodesCommandInput,
  ListNodesCommandOutput
>(PanoramaClient, ListNodesCommand, "NextToken", "NextToken", "MaxResults");
