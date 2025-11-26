// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetJobRunsCommand, GetJobRunsCommandInput, GetJobRunsCommandOutput } from "../commands/GetJobRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetJobRuns: (
  config: GluePaginationConfiguration,
  input: GetJobRunsCommandInput,
  ...rest: any[]
) => Paginator<GetJobRunsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetJobRunsCommandInput,
  GetJobRunsCommandOutput
>(GlueClient, GetJobRunsCommand, "NextToken", "NextToken", "MaxResults");
