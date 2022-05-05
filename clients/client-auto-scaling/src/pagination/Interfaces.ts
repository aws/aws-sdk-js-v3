// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { AutoScaling } from "../AutoScaling";
import { AutoScalingClient } from "../AutoScalingClient";

export interface AutoScalingPaginationConfiguration extends PaginationConfiguration {
  client: AutoScaling | AutoScalingClient;
}
