// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import { WorkLinkClient } from "../WorkLinkClient";
import { WorkLinkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFleets: (
  config: WorkLinkPaginationConfiguration,
  input: ListFleetsCommandInput,
  ...rest: any[]
) => Paginator<ListFleetsCommandOutput> = createPaginator<
  WorkLinkPaginationConfiguration,
  ListFleetsCommandInput,
  ListFleetsCommandOutput
>(WorkLinkClient, ListFleetsCommand, "NextToken", "NextToken", "MaxResults");
