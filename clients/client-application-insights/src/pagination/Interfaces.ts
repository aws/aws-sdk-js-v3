// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ApplicationInsights } from "../ApplicationInsights";
import { ApplicationInsightsClient } from "../ApplicationInsightsClient";

export interface ApplicationInsightsPaginationConfiguration extends PaginationConfiguration {
  client: ApplicationInsights | ApplicationInsightsClient;
}
