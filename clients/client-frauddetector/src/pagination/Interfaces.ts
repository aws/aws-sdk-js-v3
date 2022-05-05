// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { FraudDetector } from "../FraudDetector";
import { FraudDetectorClient } from "../FraudDetectorClient";

export interface FraudDetectorPaginationConfiguration extends PaginationConfiguration {
  client: FraudDetector | FraudDetectorClient;
}
