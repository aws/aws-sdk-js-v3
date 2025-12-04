// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppRunnerClient } from "../AppRunnerClient";
import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "../commands/ListOperationsCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOperations: (
  config: AppRunnerPaginationConfiguration,
  input: ListOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListOperationsCommandOutput> = createPaginator<
  AppRunnerPaginationConfiguration,
  ListOperationsCommandInput,
  ListOperationsCommandOutput
>(AppRunnerClient, ListOperationsCommand, "NextToken", "NextToken", "MaxResults");
