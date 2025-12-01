// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCompilationJobsCommand,
  ListCompilationJobsCommandInput,
  ListCompilationJobsCommandOutput,
} from "../commands/ListCompilationJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCompilationJobs: (
  config: SageMakerPaginationConfiguration,
  input: ListCompilationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListCompilationJobsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListCompilationJobsCommandInput,
  ListCompilationJobsCommandOutput
>(SageMakerClient, ListCompilationJobsCommand, "NextToken", "NextToken", "MaxResults");
