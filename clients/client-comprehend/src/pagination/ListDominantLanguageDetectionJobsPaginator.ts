// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDominantLanguageDetectionJobsCommand,
  ListDominantLanguageDetectionJobsCommandInput,
  ListDominantLanguageDetectionJobsCommandOutput,
} from "../commands/ListDominantLanguageDetectionJobsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDominantLanguageDetectionJobs: (
  config: ComprehendPaginationConfiguration,
  input: ListDominantLanguageDetectionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDominantLanguageDetectionJobsCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListDominantLanguageDetectionJobsCommandInput,
  ListDominantLanguageDetectionJobsCommandOutput
>(ComprehendClient, ListDominantLanguageDetectionJobsCommand, "NextToken", "NextToken", "MaxResults");
