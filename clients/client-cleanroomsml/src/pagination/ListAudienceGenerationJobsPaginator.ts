// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListAudienceGenerationJobsCommand,
  ListAudienceGenerationJobsCommandInput,
  ListAudienceGenerationJobsCommandOutput,
} from "../commands/ListAudienceGenerationJobsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAudienceGenerationJobs: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListAudienceGenerationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListAudienceGenerationJobsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListAudienceGenerationJobsCommandInput,
  ListAudienceGenerationJobsCommandOutput
>(CleanRoomsMLClient, ListAudienceGenerationJobsCommand, "nextToken", "nextToken", "maxResults");
