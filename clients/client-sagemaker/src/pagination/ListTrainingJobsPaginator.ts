// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrainingJobsCommand,
  ListTrainingJobsCommandInput,
  ListTrainingJobsCommandOutput,
} from "../commands/ListTrainingJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrainingJobs: (
  config: SageMakerPaginationConfiguration,
  input: ListTrainingJobsCommandInput,
  ...rest: any[]
) => Paginator<ListTrainingJobsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListTrainingJobsCommandInput,
  ListTrainingJobsCommandOutput
>(SageMakerClient, ListTrainingJobsCommand, "NextToken", "NextToken", "MaxResults");
