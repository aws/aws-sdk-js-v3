// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStepDependenciesCommand,
  ListStepDependenciesCommandInput,
  ListStepDependenciesCommandOutput,
} from "../commands/ListStepDependenciesCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStepDependencies: (
  config: DeadlinePaginationConfiguration,
  input: ListStepDependenciesCommandInput,
  ...rest: any[]
) => Paginator<ListStepDependenciesCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListStepDependenciesCommandInput,
  ListStepDependenciesCommandOutput
>(DeadlineClient, ListStepDependenciesCommand, "nextToken", "nextToken", "maxResults");
