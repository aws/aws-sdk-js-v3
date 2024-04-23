// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { GetFeedbackCommand, GetFeedbackCommandInput, GetFeedbackCommandOutput } from "../commands/GetFeedbackCommand";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetFeedback: (
  config: LookoutMetricsPaginationConfiguration,
  input: GetFeedbackCommandInput,
  ...rest: any[]
) => Paginator<GetFeedbackCommandOutput> = createPaginator<
  LookoutMetricsPaginationConfiguration,
  GetFeedbackCommandInput,
  GetFeedbackCommandOutput
>(LookoutMetricsClient, GetFeedbackCommand, "NextToken", "NextToken", "MaxResults");
