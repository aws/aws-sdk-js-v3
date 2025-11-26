// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReadSetExportJobsCommand,
  ListReadSetExportJobsCommandInput,
  ListReadSetExportJobsCommandOutput,
} from "../commands/ListReadSetExportJobsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReadSetExportJobs: (
  config: OmicsPaginationConfiguration,
  input: ListReadSetExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListReadSetExportJobsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListReadSetExportJobsCommandInput,
  ListReadSetExportJobsCommandOutput
>(OmicsClient, ListReadSetExportJobsCommand, "nextToken", "nextToken", "maxResults");
