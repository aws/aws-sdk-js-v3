// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataTransformationJobsCommand,
  ListDataTransformationJobsCommandInput,
  ListDataTransformationJobsCommandOutput,
} from "../commands/ListDataTransformationJobsCommand";
import { HealthLakeClient } from "../HealthLakeClient";
import type { HealthLakePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataTransformationJobs: (
  config: HealthLakePaginationConfiguration,
  input: ListDataTransformationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDataTransformationJobsCommandOutput> = createPaginator<
  HealthLakePaginationConfiguration,
  ListDataTransformationJobsCommandInput,
  ListDataTransformationJobsCommandOutput
>(HealthLakeClient, ListDataTransformationJobsCommand, "NextToken", "NextToken", "MaxResults");
