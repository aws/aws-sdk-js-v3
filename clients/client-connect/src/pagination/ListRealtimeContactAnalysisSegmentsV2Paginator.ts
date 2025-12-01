// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRealtimeContactAnalysisSegmentsV2Command,
  ListRealtimeContactAnalysisSegmentsV2CommandInput,
  ListRealtimeContactAnalysisSegmentsV2CommandOutput,
} from "../commands/ListRealtimeContactAnalysisSegmentsV2Command";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRealtimeContactAnalysisSegmentsV2: (
  config: ConnectPaginationConfiguration,
  input: ListRealtimeContactAnalysisSegmentsV2CommandInput,
  ...rest: any[]
) => Paginator<ListRealtimeContactAnalysisSegmentsV2CommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListRealtimeContactAnalysisSegmentsV2CommandInput,
  ListRealtimeContactAnalysisSegmentsV2CommandOutput
>(ConnectClient, ListRealtimeContactAnalysisSegmentsV2Command, "NextToken", "NextToken", "MaxResults");
