// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProcessingJobsCommand,
  ListProcessingJobsCommandInput,
  ListProcessingJobsCommandOutput,
} from "../commands/ListProcessingJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProcessingJobs: (
  config: SageMakerPaginationConfiguration,
  input: ListProcessingJobsCommandInput,
  ...rest: any[]
) => Paginator<ListProcessingJobsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListProcessingJobsCommandInput,
  ListProcessingJobsCommandOutput
>(SageMakerClient, ListProcessingJobsCommand, "NextToken", "NextToken", "MaxResults");
