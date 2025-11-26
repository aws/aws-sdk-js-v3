// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListModelCardExportJobsCommand,
  ListModelCardExportJobsCommandInput,
  ListModelCardExportJobsCommandOutput,
} from "../commands/ListModelCardExportJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelCardExportJobs: (
  config: SageMakerPaginationConfiguration,
  input: ListModelCardExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListModelCardExportJobsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListModelCardExportJobsCommandInput,
  ListModelCardExportJobsCommandOutput
>(SageMakerClient, ListModelCardExportJobsCommand, "NextToken", "NextToken", "MaxResults");
