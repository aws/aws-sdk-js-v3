// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListWorldGenerationJobsCommand,
  ListWorldGenerationJobsCommandInput,
  ListWorldGenerationJobsCommandOutput,
} from "../commands/ListWorldGenerationJobsCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorldGenerationJobs: (
  config: RoboMakerPaginationConfiguration,
  input: ListWorldGenerationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListWorldGenerationJobsCommandOutput> = createPaginator<
  RoboMakerPaginationConfiguration,
  ListWorldGenerationJobsCommandInput,
  ListWorldGenerationJobsCommandOutput
>(RoboMakerClient, ListWorldGenerationJobsCommand, "nextToken", "nextToken", "maxResults");
