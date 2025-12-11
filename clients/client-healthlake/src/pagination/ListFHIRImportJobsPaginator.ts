// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFHIRImportJobsCommand,
  ListFHIRImportJobsCommandInput,
  ListFHIRImportJobsCommandOutput,
} from "../commands/ListFHIRImportJobsCommand";
import { HealthLakeClient } from "../HealthLakeClient";
import { HealthLakePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFHIRImportJobs: (
  config: HealthLakePaginationConfiguration,
  input: ListFHIRImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListFHIRImportJobsCommandOutput> = createPaginator<
  HealthLakePaginationConfiguration,
  ListFHIRImportJobsCommandInput,
  ListFHIRImportJobsCommandOutput
>(HealthLakeClient, ListFHIRImportJobsCommand, "NextToken", "NextToken", "MaxResults");
