import { _HealthCheck } from "./_HealthCheck";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfigureHealthCheckInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "HealthCheck"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    HealthCheck: {
      shape: _HealthCheck
    }
  }
};
