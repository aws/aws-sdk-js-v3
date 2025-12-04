// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListWorkersCommand, ListWorkersCommandInput, ListWorkersCommandOutput } from "../commands/ListWorkersCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkers: (
  config: DeadlinePaginationConfiguration,
  input: ListWorkersCommandInput,
  ...rest: any[]
) => Paginator<ListWorkersCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListWorkersCommandInput,
  ListWorkersCommandOutput
>(DeadlineClient, ListWorkersCommand, "nextToken", "nextToken", "maxResults");
