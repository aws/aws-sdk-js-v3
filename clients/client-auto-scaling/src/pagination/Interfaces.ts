import { AutoScaling } from "../AutoScaling";
import { AutoScalingClient } from "../AutoScalingClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface AutoScalingPaginationConfiguration extends PaginationConfiguration {
  client: AutoScaling | AutoScalingClient;
}
