// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListStepsCommand, ListStepsCommandInput, ListStepsCommandOutput } from "../commands/ListStepsCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSteps: (
  config: DeadlinePaginationConfiguration,
  input: ListStepsCommandInput,
  ...rest: any[]
) => Paginator<ListStepsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListStepsCommandInput,
  ListStepsCommandOutput
>(DeadlineClient, ListStepsCommand, "nextToken", "nextToken", "maxResults");
