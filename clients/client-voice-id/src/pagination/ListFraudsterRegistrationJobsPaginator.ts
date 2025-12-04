// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFraudsterRegistrationJobsCommand,
  ListFraudsterRegistrationJobsCommandInput,
  ListFraudsterRegistrationJobsCommandOutput,
} from "../commands/ListFraudsterRegistrationJobsCommand";
import { VoiceIDClient } from "../VoiceIDClient";
import { VoiceIDPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFraudsterRegistrationJobs: (
  config: VoiceIDPaginationConfiguration,
  input: ListFraudsterRegistrationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListFraudsterRegistrationJobsCommandOutput> = createPaginator<
  VoiceIDPaginationConfiguration,
  ListFraudsterRegistrationJobsCommandInput,
  ListFraudsterRegistrationJobsCommandOutput
>(VoiceIDClient, ListFraudsterRegistrationJobsCommand, "NextToken", "NextToken", "MaxResults");
