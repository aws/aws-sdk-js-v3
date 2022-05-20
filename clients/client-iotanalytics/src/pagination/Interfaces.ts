// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { IoTAnalytics } from "../IoTAnalytics";
import { IoTAnalyticsClient } from "../IoTAnalyticsClient";

export interface IoTAnalyticsPaginationConfiguration extends PaginationConfiguration {
  client: IoTAnalytics | IoTAnalyticsClient;
}
