// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImportJobsCommand,
  ListImportJobsCommandInput,
  ListImportJobsCommandOutput,
} from "../commands/ListImportJobsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImportJobs: (
  config: SESv2PaginationConfiguration,
  input: ListImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListImportJobsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListImportJobsCommandInput,
  ListImportJobsCommandOutput
>(SESv2Client, ListImportJobsCommand, "NextToken", "NextToken", "PageSize");
