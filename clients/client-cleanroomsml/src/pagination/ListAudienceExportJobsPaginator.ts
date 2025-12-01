// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListAudienceExportJobsCommand,
  ListAudienceExportJobsCommandInput,
  ListAudienceExportJobsCommandOutput,
} from "../commands/ListAudienceExportJobsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAudienceExportJobs: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListAudienceExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListAudienceExportJobsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListAudienceExportJobsCommandInput,
  ListAudienceExportJobsCommandOutput
>(CleanRoomsMLClient, ListAudienceExportJobsCommand, "nextToken", "nextToken", "maxResults");
