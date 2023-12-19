// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListWorldExportJobsCommand,
  ListWorldExportJobsCommandInput,
  ListWorldExportJobsCommandOutput,
} from "../commands/ListWorldExportJobsCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorldExportJobs: (
  config: RoboMakerPaginationConfiguration,
  input: ListWorldExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListWorldExportJobsCommandOutput> = createPaginator<
  RoboMakerPaginationConfiguration,
  ListWorldExportJobsCommandInput,
  ListWorldExportJobsCommandOutput
>(RoboMakerClient, ListWorldExportJobsCommand, "nextToken", "nextToken", "maxResults");
