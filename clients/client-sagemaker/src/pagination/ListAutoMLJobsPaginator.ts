// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAutoMLJobsCommand,
  ListAutoMLJobsCommandInput,
  ListAutoMLJobsCommandOutput,
} from "../commands/ListAutoMLJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutoMLJobs: (
  config: SageMakerPaginationConfiguration,
  input: ListAutoMLJobsCommandInput,
  ...rest: any[]
) => Paginator<ListAutoMLJobsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListAutoMLJobsCommandInput,
  ListAutoMLJobsCommandOutput
>(SageMakerClient, ListAutoMLJobsCommand, "NextToken", "NextToken", "MaxResults");
