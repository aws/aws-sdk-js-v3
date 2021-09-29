import { FraudDetector } from "../FraudDetector";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface FraudDetectorPaginationConfiguration extends PaginationConfiguration {
  client: FraudDetector | FraudDetectorClient;
}
