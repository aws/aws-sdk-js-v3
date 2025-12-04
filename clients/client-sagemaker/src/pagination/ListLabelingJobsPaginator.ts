// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLabelingJobsCommand,
  ListLabelingJobsCommandInput,
  ListLabelingJobsCommandOutput,
} from "../commands/ListLabelingJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLabelingJobs: (
  config: SageMakerPaginationConfiguration,
  input: ListLabelingJobsCommandInput,
  ...rest: any[]
) => Paginator<ListLabelingJobsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListLabelingJobsCommandInput,
  ListLabelingJobsCommandOutput
>(SageMakerClient, ListLabelingJobsCommand, "NextToken", "NextToken", "MaxResults");
