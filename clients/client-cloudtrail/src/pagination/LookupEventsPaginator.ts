// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import {
  LookupEventsCommand,
  LookupEventsCommandInput,
  LookupEventsCommandOutput,
} from "../commands/LookupEventsCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateLookupEvents: (
  config: CloudTrailPaginationConfiguration,
  input: LookupEventsCommandInput,
  ...rest: any[]
) => Paginator<LookupEventsCommandOutput> = createPaginator<
  CloudTrailPaginationConfiguration,
  LookupEventsCommandInput,
  LookupEventsCommandOutput
>(CloudTrailClient, LookupEventsCommand, "NextToken", "NextToken", "MaxResults");
