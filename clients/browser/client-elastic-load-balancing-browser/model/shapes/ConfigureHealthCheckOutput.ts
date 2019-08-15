import { _HealthCheck } from "./_HealthCheck";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfigureHealthCheckOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HealthCheck: {
      shape: _HealthCheck
    }
  }
};
