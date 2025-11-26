// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTransformJobsCommand,
  ListTransformJobsCommandInput,
  ListTransformJobsCommandOutput,
} from "../commands/ListTransformJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTransformJobs: (
  config: SageMakerPaginationConfiguration,
  input: ListTransformJobsCommandInput,
  ...rest: any[]
) => Paginator<ListTransformJobsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListTransformJobsCommandInput,
  ListTransformJobsCommandOutput
>(SageMakerClient, ListTransformJobsCommand, "NextToken", "NextToken", "MaxResults");
