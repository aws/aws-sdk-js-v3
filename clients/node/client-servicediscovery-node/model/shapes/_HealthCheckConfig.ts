import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HealthCheckConfig: _Structure_ = {
  type: "structure",
  required: ["Type"],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    ResourcePath: {
      shape: {
        type: "string"
      }
    },
    FailureThreshold: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
