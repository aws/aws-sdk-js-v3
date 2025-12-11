// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetJobsCommand, GetJobsCommandInput, GetJobsCommandOutput } from "../commands/GetJobsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetJobs: (
  config: GluePaginationConfiguration,
  input: GetJobsCommandInput,
  ...rest: any[]
) => Paginator<GetJobsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetJobsCommandInput,
  GetJobsCommandOutput
>(GlueClient, GetJobsCommand, "NextToken", "NextToken", "MaxResults");
