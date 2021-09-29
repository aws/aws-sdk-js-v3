import { IoTAnalytics } from "../IoTAnalytics";
import { IoTAnalyticsClient } from "../IoTAnalyticsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface IoTAnalyticsPaginationConfiguration extends PaginationConfiguration {
  client: IoTAnalytics | IoTAnalyticsClient;
}
