// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  PollForDecisionTaskCommand,
  PollForDecisionTaskCommandInput,
  PollForDecisionTaskCommandOutput,
} from "../commands/PollForDecisionTaskCommand";
import { SWFClient } from "../SWFClient";
import { SWFPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginatePollForDecisionTask: (
  config: SWFPaginationConfiguration,
  input: PollForDecisionTaskCommandInput,
  ...rest: any[]
) => Paginator<PollForDecisionTaskCommandOutput> = createPaginator<
  SWFPaginationConfiguration,
  PollForDecisionTaskCommandInput,
  PollForDecisionTaskCommandOutput
>(SWFClient, PollForDecisionTaskCommand, "nextPageToken", "nextPageToken", "maximumPageSize");
