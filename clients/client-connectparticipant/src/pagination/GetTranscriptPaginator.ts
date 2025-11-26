// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTranscriptCommand,
  GetTranscriptCommandInput,
  GetTranscriptCommandOutput,
} from "../commands/GetTranscriptCommand";
import { ConnectParticipantClient } from "../ConnectParticipantClient";
import { ConnectParticipantPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTranscript: (
  config: ConnectParticipantPaginationConfiguration,
  input: GetTranscriptCommandInput,
  ...rest: any[]
) => Paginator<GetTranscriptCommandOutput> = createPaginator<
  ConnectParticipantPaginationConfiguration,
  GetTranscriptCommandInput,
  GetTranscriptCommandOutput
>(ConnectParticipantClient, GetTranscriptCommand, "NextToken", "NextToken", "MaxResults");
