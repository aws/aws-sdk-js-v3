// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMedicalScribeJobsCommand,
  ListMedicalScribeJobsCommandInput,
  ListMedicalScribeJobsCommandOutput,
} from "../commands/ListMedicalScribeJobsCommand";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMedicalScribeJobs: (
  config: TranscribePaginationConfiguration,
  input: ListMedicalScribeJobsCommandInput,
  ...rest: any[]
) => Paginator<ListMedicalScribeJobsCommandOutput> = createPaginator<
  TranscribePaginationConfiguration,
  ListMedicalScribeJobsCommandInput,
  ListMedicalScribeJobsCommandOutput
>(TranscribeClient, ListMedicalScribeJobsCommand, "NextToken", "NextToken", "MaxResults");
