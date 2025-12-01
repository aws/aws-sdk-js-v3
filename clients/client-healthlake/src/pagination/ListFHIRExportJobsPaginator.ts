// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFHIRExportJobsCommand,
  ListFHIRExportJobsCommandInput,
  ListFHIRExportJobsCommandOutput,
} from "../commands/ListFHIRExportJobsCommand";
import { HealthLakeClient } from "../HealthLakeClient";
import { HealthLakePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFHIRExportJobs: (
  config: HealthLakePaginationConfiguration,
  input: ListFHIRExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListFHIRExportJobsCommandOutput> = createPaginator<
  HealthLakePaginationConfiguration,
  ListFHIRExportJobsCommandInput,
  ListFHIRExportJobsCommandOutput
>(HealthLakeClient, ListFHIRExportJobsCommand, "NextToken", "NextToken", "MaxResults");
