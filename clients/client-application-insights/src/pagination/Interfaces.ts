import { ApplicationInsights } from "../ApplicationInsights";
import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ApplicationInsightsPaginationConfiguration extends PaginationConfiguration {
  client: ApplicationInsights | ApplicationInsightsClient;
}
