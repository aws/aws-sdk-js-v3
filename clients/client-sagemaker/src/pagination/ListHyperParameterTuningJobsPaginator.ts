// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHyperParameterTuningJobsCommand,
  ListHyperParameterTuningJobsCommandInput,
  ListHyperParameterTuningJobsCommandOutput,
} from "../commands/ListHyperParameterTuningJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHyperParameterTuningJobs: (
  config: SageMakerPaginationConfiguration,
  input: ListHyperParameterTuningJobsCommandInput,
  ...rest: any[]
) => Paginator<ListHyperParameterTuningJobsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListHyperParameterTuningJobsCommandInput,
  ListHyperParameterTuningJobsCommandOutput
>(SageMakerClient, ListHyperParameterTuningJobsCommand, "NextToken", "NextToken", "MaxResults");
