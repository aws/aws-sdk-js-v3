// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrainingJobsForHyperParameterTuningJobCommand,
  ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ListTrainingJobsForHyperParameterTuningJobCommandOutput,
} from "../commands/ListTrainingJobsForHyperParameterTuningJobCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrainingJobsForHyperParameterTuningJob: (
  config: SageMakerPaginationConfiguration,
  input: ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ...rest: any[]
) => Paginator<ListTrainingJobsForHyperParameterTuningJobCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ListTrainingJobsForHyperParameterTuningJobCommandOutput
>(SageMakerClient, ListTrainingJobsForHyperParameterTuningJobCommand, "NextToken", "NextToken", "MaxResults");
