// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLabelingJobsForWorkteamCommand,
  ListLabelingJobsForWorkteamCommandInput,
  ListLabelingJobsForWorkteamCommandOutput,
} from "../commands/ListLabelingJobsForWorkteamCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLabelingJobsForWorkteam: (
  config: SageMakerPaginationConfiguration,
  input: ListLabelingJobsForWorkteamCommandInput,
  ...rest: any[]
) => Paginator<ListLabelingJobsForWorkteamCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListLabelingJobsForWorkteamCommandInput,
  ListLabelingJobsForWorkteamCommandOutput
>(SageMakerClient, ListLabelingJobsForWorkteamCommand, "NextToken", "NextToken", "MaxResults");
