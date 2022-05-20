// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ApplicationAutoScaling } from "../ApplicationAutoScaling";
import { ApplicationAutoScalingClient } from "../ApplicationAutoScalingClient";

export interface ApplicationAutoScalingPaginationConfiguration extends PaginationConfiguration {
  client: ApplicationAutoScaling | ApplicationAutoScalingClient;
}
