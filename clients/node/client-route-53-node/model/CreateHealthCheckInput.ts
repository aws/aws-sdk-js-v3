import { _HealthCheckConfig } from "./_HealthCheckConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHealthCheckInput: _Structure_ = {
  type: "structure",
  required: ["CallerReference", "HealthCheckConfig"],
  members: {
    CallerReference: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HealthCheckConfig: {
      shape: _HealthCheckConfig
    }
  }
};
