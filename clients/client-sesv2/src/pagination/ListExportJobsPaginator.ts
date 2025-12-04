// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExportJobsCommand,
  ListExportJobsCommandInput,
  ListExportJobsCommandOutput,
} from "../commands/ListExportJobsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExportJobs: (
  config: SESv2PaginationConfiguration,
  input: ListExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListExportJobsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListExportJobsCommandInput,
  ListExportJobsCommandOutput
>(SESv2Client, ListExportJobsCommand, "NextToken", "NextToken", "PageSize");
