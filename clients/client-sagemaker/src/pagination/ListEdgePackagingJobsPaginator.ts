// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEdgePackagingJobsCommand,
  ListEdgePackagingJobsCommandInput,
  ListEdgePackagingJobsCommandOutput,
} from "../commands/ListEdgePackagingJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEdgePackagingJobs: (
  config: SageMakerPaginationConfiguration,
  input: ListEdgePackagingJobsCommandInput,
  ...rest: any[]
) => Paginator<ListEdgePackagingJobsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListEdgePackagingJobsCommandInput,
  ListEdgePackagingJobsCommandOutput
>(SageMakerClient, ListEdgePackagingJobsCommand, "NextToken", "NextToken", "MaxResults");
