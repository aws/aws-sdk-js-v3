// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTableOptimizerRunsCommand,
  ListTableOptimizerRunsCommandInput,
  ListTableOptimizerRunsCommandOutput,
} from "../commands/ListTableOptimizerRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTableOptimizerRuns: (
  config: GluePaginationConfiguration,
  input: ListTableOptimizerRunsCommandInput,
  ...rest: any[]
) => Paginator<ListTableOptimizerRunsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListTableOptimizerRunsCommandInput,
  ListTableOptimizerRunsCommandOutput
>(GlueClient, ListTableOptimizerRunsCommand, "NextToken", "NextToken", "MaxResults");
