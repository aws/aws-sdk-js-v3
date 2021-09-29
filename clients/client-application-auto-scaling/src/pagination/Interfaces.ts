import { ApplicationAutoScaling } from "../ApplicationAutoScaling";
import { ApplicationAutoScalingClient } from "../ApplicationAutoScalingClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ApplicationAutoScalingPaginationConfiguration extends PaginationConfiguration {
  client: ApplicationAutoScaling | ApplicationAutoScalingClient;
}
