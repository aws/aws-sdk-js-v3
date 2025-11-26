// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSpeakerEnrollmentJobsCommand,
  ListSpeakerEnrollmentJobsCommandInput,
  ListSpeakerEnrollmentJobsCommandOutput,
} from "../commands/ListSpeakerEnrollmentJobsCommand";
import { VoiceIDClient } from "../VoiceIDClient";
import { VoiceIDPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSpeakerEnrollmentJobs: (
  config: VoiceIDPaginationConfiguration,
  input: ListSpeakerEnrollmentJobsCommandInput,
  ...rest: any[]
) => Paginator<ListSpeakerEnrollmentJobsCommandOutput> = createPaginator<
  VoiceIDPaginationConfiguration,
  ListSpeakerEnrollmentJobsCommandInput,
  ListSpeakerEnrollmentJobsCommandOutput
>(VoiceIDClient, ListSpeakerEnrollmentJobsCommand, "NextToken", "NextToken", "MaxResults");
