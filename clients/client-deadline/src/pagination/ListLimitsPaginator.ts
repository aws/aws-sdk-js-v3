// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListLimitsCommand, ListLimitsCommandInput, ListLimitsCommandOutput } from "../commands/ListLimitsCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLimits: (
  config: DeadlinePaginationConfiguration,
  input: ListLimitsCommandInput,
  ...rest: any[]
) => Paginator<ListLimitsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListLimitsCommandInput,
  ListLimitsCommandOutput
>(DeadlineClient, ListLimitsCommand, "nextToken", "nextToken", "maxResults");
