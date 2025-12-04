// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetMLTaskRunsCommand,
  GetMLTaskRunsCommandInput,
  GetMLTaskRunsCommandOutput,
} from "../commands/GetMLTaskRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetMLTaskRuns: (
  config: GluePaginationConfiguration,
  input: GetMLTaskRunsCommandInput,
  ...rest: any[]
) => Paginator<GetMLTaskRunsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetMLTaskRunsCommandInput,
  GetMLTaskRunsCommandOutput
>(GlueClient, GetMLTaskRunsCommand, "NextToken", "NextToken", "MaxResults");
