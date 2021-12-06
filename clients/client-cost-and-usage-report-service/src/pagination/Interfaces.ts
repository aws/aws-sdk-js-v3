import { PaginationConfiguration } from "@aws-sdk/types";

import { CostAndUsageReportService } from "../CostAndUsageReportService";
import { CostAndUsageReportServiceClient } from "../CostAndUsageReportServiceClient";

export interface CostAndUsageReportServicePaginationConfiguration extends PaginationConfiguration {
  client: CostAndUsageReportService | CostAndUsageReportServiceClient;
}
