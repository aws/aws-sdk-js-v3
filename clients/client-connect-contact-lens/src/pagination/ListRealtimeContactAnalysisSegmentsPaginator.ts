// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRealtimeContactAnalysisSegmentsCommand,
  ListRealtimeContactAnalysisSegmentsCommandInput,
  ListRealtimeContactAnalysisSegmentsCommandOutput,
} from "../commands/ListRealtimeContactAnalysisSegmentsCommand";
import { ConnectContactLensClient } from "../ConnectContactLensClient";
import { ConnectContactLensPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRealtimeContactAnalysisSegments: (
  config: ConnectContactLensPaginationConfiguration,
  input: ListRealtimeContactAnalysisSegmentsCommandInput,
  ...rest: any[]
) => Paginator<ListRealtimeContactAnalysisSegmentsCommandOutput> = createPaginator<
  ConnectContactLensPaginationConfiguration,
  ListRealtimeContactAnalysisSegmentsCommandInput,
  ListRealtimeContactAnalysisSegmentsCommandOutput
>(ConnectContactLensClient, ListRealtimeContactAnalysisSegmentsCommand, "NextToken", "NextToken", "MaxResults");
