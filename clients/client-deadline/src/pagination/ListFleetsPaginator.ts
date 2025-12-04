// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFleets: (
  config: DeadlinePaginationConfiguration,
  input: ListFleetsCommandInput,
  ...rest: any[]
) => Paginator<ListFleetsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListFleetsCommandInput,
  ListFleetsCommandOutput
>(DeadlineClient, ListFleetsCommand, "nextToken", "nextToken", "maxResults");
