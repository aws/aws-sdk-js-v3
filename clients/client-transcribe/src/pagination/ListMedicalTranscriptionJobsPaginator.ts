// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMedicalTranscriptionJobsCommand,
  ListMedicalTranscriptionJobsCommandInput,
  ListMedicalTranscriptionJobsCommandOutput,
} from "../commands/ListMedicalTranscriptionJobsCommand";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMedicalTranscriptionJobs: (
  config: TranscribePaginationConfiguration,
  input: ListMedicalTranscriptionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListMedicalTranscriptionJobsCommandOutput> = createPaginator<
  TranscribePaginationConfiguration,
  ListMedicalTranscriptionJobsCommandInput,
  ListMedicalTranscriptionJobsCommandOutput
>(TranscribeClient, ListMedicalTranscriptionJobsCommand, "NextToken", "NextToken", "MaxResults");
