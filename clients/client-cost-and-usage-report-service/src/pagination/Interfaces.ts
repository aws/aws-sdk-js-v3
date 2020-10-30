import { CostAndUsageReportService } from "../CostAndUsageReportService";
import { CostAndUsageReportServiceClient } from "../CostAndUsageReportServiceClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CostAndUsageReportServicePaginationConfiguration extends PaginationConfiguration {
  client: CostAndUsageReportService | CostAndUsageReportServiceClient;
}
