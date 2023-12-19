// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListModelPackagingJobsCommand,
  ListModelPackagingJobsCommandInput,
  ListModelPackagingJobsCommandOutput,
} from "../commands/ListModelPackagingJobsCommand";
import { LookoutVisionClient } from "../LookoutVisionClient";
import { LookoutVisionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelPackagingJobs: (
  config: LookoutVisionPaginationConfiguration,
  input: ListModelPackagingJobsCommandInput,
  ...rest: any[]
) => Paginator<ListModelPackagingJobsCommandOutput> = createPaginator<
  LookoutVisionPaginationConfiguration,
  ListModelPackagingJobsCommandInput,
  ListModelPackagingJobsCommandOutput
>(LookoutVisionClient, ListModelPackagingJobsCommand, "NextToken", "NextToken", "MaxResults");
