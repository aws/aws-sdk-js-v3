// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListGraphsCommand, ListGraphsCommandInput, ListGraphsCommandOutput } from "../commands/ListGraphsCommand";
import { DetectiveClient } from "../DetectiveClient";
import { DetectivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGraphs: (
  config: DetectivePaginationConfiguration,
  input: ListGraphsCommandInput,
  ...rest: any[]
) => Paginator<ListGraphsCommandOutput> = createPaginator<
  DetectivePaginationConfiguration,
  ListGraphsCommandInput,
  ListGraphsCommandOutput
>(DetectiveClient, ListGraphsCommand, "NextToken", "NextToken", "MaxResults");
